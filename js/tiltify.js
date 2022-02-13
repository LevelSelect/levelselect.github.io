//Tiltify data pull
function tiltPull() {
    fetch("https://dftbrt-cors.herokuapp.com/https://api.tiltify.com/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
        },
        "referrer": "https://overlay.tiltify.com/",
        "body": "{\"operationName\":\"get_campaign_and_milestones\",\"variables\":{\"vanity\":\"+levelselect\",\"slug\":\"spring-charity-select-2022\"},\"query\":\"query get_campaign_and_milestones($vanity: String!, $slug: String!) {\\n  campaign(vanity: $vanity, slug: $slug) {\\n    id\\n    name\\n    status\\n    topDonation {\\n      amount {\\n        currency\\n        value\\n        __typename\\n      }\\n      donorName\\n      id\\n      __typename\\n    }\\n    totalAmountRaised {\\n      value\\n      currency\\n      __typename\\n    }\\n    goal {\\n      value\\n      currency\\n      __typename\\n    }\\n    milestones {\\n      id\\n      name\\n      amount {\\n        value\\n        currency\\n        __typename\\n      }\\n      __typename\\n    }\\n    cause {\\n      name\\n      avatar {\\n        alt\\n        src\\n        __typename\\n      }\\n      colors {\\n        highlight\\n        background\\n        __typename\\n      }\\n      __typename\\n    }\\n    fundraisingEvent {\\n      name\\n      avatar {\\n        alt\\n        src\\n        __typename\\n      }\\n      colors {\\n        highlight\\n        background\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
        "method": "POST"
    })
        .then(response => response.json())
        .then(data => obj = data)
        .then(() => console.log(obj))
        .then(() => {
            if (obj.data.campaign.goal.currency = "GBP" ) {var currency = "£"} else if (obj.data.campaign.goal.currency = "USD") {var currency = "$"};
            urlParams = new URLSearchParams(window.location.search);
            $("#total").html("Current Total<hr class='totalHR'>" + currency + obj.data.campaign.totalAmountRaised.value + "/" + currency + obj.data.campaign.goal.value);
            var compareTotal = parseInt(obj.data.campaign.totalAmountRaised.value);
            $("tr").each(function (){
                var incentiveValue = parseInt($(this).children("td").filter(':nth-child(1)').text());
                //console.log(incentiveValue);
                //console.log(compareTotal);
                if (incentiveValue <= compareTotal) {
                    $(this).css('color','green');
                }
            });
        });
};
