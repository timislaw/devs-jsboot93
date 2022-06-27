const getArticle = async () => {
    const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=50');

    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch data');
    };
};

const displayer = (data) => {
    const title = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', data.canonical_url)
    link.textContent = 'Read';
    link.classList.add('button');
    title.textContent = data.slug;
    const checkRead = document.createElement('input');
    checkRead.setAttribute('type', 'checkbox');
    const br = document.createElement('br');
    const hr = document.createElement('hr');
    checkRead.addEventListener('click', () => {
        title.classList.toggle('checked');
    });
    document.querySelector('#output').appendChild(title);
    document.querySelector('#output').appendChild(checkRead);
    document.querySelector('#output').appendChild(link);
    document.querySelector('#output').appendChild(br);
    document.querySelector('#output').appendChild(hr);
};

const displayerDesc = (data) => {
    const title = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', data.canonical_url)
    link.textContent = 'Read';
    link.classList.add('button');
    title.textContent = data.seoDescription;
    const checkRead = document.createElement('input');
    checkRead.setAttribute('type', 'checkbox');
    const br = document.createElement('br');
    const hr = document.createElement('hr');
    checkRead.addEventListener('click', () => {
        title.classList.toggle('checked');
    });
    document.querySelector('#output').appendChild(title);
    document.querySelector('#output').appendChild(checkRead);
    document.querySelector('#output').appendChild(link);
    document.querySelector('#output').appendChild(br);
    document.querySelector('#output').appendChild(hr);
};

const displayerSeo = (data) => {
    const title = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', data.canonical_url)
    link.textContent = 'Read';
    link.classList.add('button');
    title.textContent = data.seoTitle;
    const checkRead = document.createElement('input');
    checkRead.setAttribute('type', 'checkbox');
    const br = document.createElement('br');
    const hr = document.createElement('hr');
    checkRead.addEventListener('click', () => {
        title.classList.toggle('checked');
    });
    document.querySelector('#output').appendChild(title);
    document.querySelector('#output').appendChild(checkRead);
    document.querySelector('#output').appendChild(link);
    document.querySelector('#output').appendChild(br);
    document.querySelector('#output').appendChild(hr);
};

const renderFeaturedArticles = (data) => {
    document.querySelector('#output').innerHTML = '';

    data.forEach((data) => {
        if (data.featured === true) {
            displayer(data);
        };
    });

};

const renderUnfeaturedArticles = (data) => {
    document.querySelector('#output').innerHTML = '';

    data.forEach((data) => {
        if (data.featured === false) {
            displayer(data);
        };
    });

};

const renderSeoArticles = (data) => {
    document.querySelector('#output').innerHTML = '';

    data.forEach((data) => {
        if (data.seoTitle.length > 0) {
            displayerSeo(data);
        };
    });

};

const renderSeoDescription = (data) => {
    document.querySelector('#output').innerHTML = '';

    data.forEach((data) => {
        if (data.seoDescription.length > 0) {
            displayerDesc(data);
        };
    });

};