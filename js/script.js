const companies = [
    {
        name: 'JHI',
        logo: 'JHI',
        image: 'img/jhi.png',
        position: 'Service Desk Specialist',
        duration: 'Feb 2024 to Present',
        description: 'JHI (likely John Holland Group) is a major Australian infrastructure and property company. They are involved in large-scale projects across various sectors including transportation, building, and energy.'
    },
    {
        name: 'Harvey Norman',
        logo: 'Harvey Norman',
        image: 'img/harvey_norman.png',
        position: 'Sales Consultant',
        duration: 'Jan 2023 to Feb 2024',
        description: 'Harvey Norman is a large Australian-based, multi-national retailer of furniture, bedding, computers, communications and consumer electrical products. They are known for their wide range of home and lifestyle products.'
    },
    {
        name: "Domino's",
        logo: "Domino's",
        image: 'img/dominos.png',
        position: 'Store Manager',
        duration: 'Nov 2018 to 2023 Jan',
        description: "Domino's is a multinational pizza restaurant chain. Founded in the United States, it's now one of the largest pizza delivery companies worldwide, known for its innovative ordering technology and fast delivery times."
    }
];

function createCard(company) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${company.image}" alt="${company.name}" class="company-image">
        <div class="logo">${company.logo}</div>
        <div class="position">${company.position}</div>
        <div class="duration">${company.duration}</div>
        <div class="description">${company.description.slice(0, 100)}...</div>
        <div class="read-more">Read More</div>
    `;

    const description = card.querySelector('.description');
    const readMore = card.querySelector('.read-more');
    let isExpanded = false;

    readMore.addEventListener('click', () => {
        if (isExpanded) {
            description.textContent = company.description.slice(0, 100) + '...';
            readMore.textContent = 'Read More';
        } else {
            description.textContent = company.description;
            readMore.textContent = 'Read Less';
        }
        isExpanded = !isExpanded;
    });

    return card;
}

const container = document.getElementById('experience-container');
companies.forEach(company => {
    container.appendChild(createCard(company));
});





