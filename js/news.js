/*async function extractNews() {
    var url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=69c05c3e9def4e2aaee0d739b28ee3f1";

    var cardContainer = document.getElementById('newsCards');
    var response = await fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {

            var total = responseJSON.totalResults;
            var obj = responseJSON["articles"];
            for (i = 0; i < total; i++) {

                let hyperlinkCard = document.createElement('a');
                hyperlinkCard.href = obj[i].url;
                hyperlinkCard.target = "_blank";

                let card = document.createElement('div');
                card.className = 'card shadow';

                if (obj[i].urlToImage) {
                    let cardpic = document.createElement("img");
                    cardpic.className = "mb-n5 card-img-top";
                    cardpic.src = obj[i].urlToImage;
                    card.appendChild(cardpic);
                }

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                let title = document.createElement('h5');
                title.className = "card-title";
                title.innerText = obj[i].title;

                let subtitle = document.createElement("h6");
                subtitle.className = "card-subtitle text-muted";
                subtitle.innerText = (obj[i].author ? obj[i].author : "") + " " + obj[i].publishedAt.slice(0, 10);

                let description = document.createElement('p');
                description.className = "card-text text-muted";
                description.innerText = obj[i].description;

                card.appendChild(cardBody);
                card.appendChild(title);
                card.appendChild(subtitle);
                card.appendChild(description);
                hyperlinkCard.appendChild(card)
                cardContainer.appendChild(hyperlinkCard);
            }
        });
}

extractNews();*/