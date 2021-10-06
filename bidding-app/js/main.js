const bidsStorageKey = 'bids';

let bids;

let existingBids = retrieve();

if (existingBids) {
  bids = existingBids;
} else {
  bids = [
    {
      bidder: 'bidder1',
      bid: 30,
    },
    {
      bidder: 'bidder2',
      bid: 35,
    },
    {
      bidder: 'bidder1',
      bid: 60,
    },
    {
      bidder: 'bidder2',
      bid: 61,
    },
  ];
}

function render() {
  let bidsHtml = '';
  bids.forEach((bid) => {
    bidsHtml += `<div>
            <div>Bid: $${bid.bid}</div>
            <div style="font-size:.75em">Bidder: ${bid.bidder}</div>
        </div>`;
  });

  document.querySelector('#bids').innerHTML = bidsHtml;
}

function addBid(user) {
  bids.push({
    bid: +document.getElementById(user).value,
    bidder: user,
  });
  document.getElementById(user).value = '';
  render();
  save();
}

function save() {
  localStorage.setItem(bidsStorageKey, JSON.stringify(bids));
}

function retrieve() {
  return JSON.parse(localStorage.getItem(bidsStorageKey));
}

render();
save();
