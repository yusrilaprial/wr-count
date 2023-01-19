const match = document.querySelector("#match");
const wr = document.querySelector("#wr");
const req = document.querySelector("#req");
const result = document.querySelector("#result");

const calculateWin = () => {
    const resultNum = rumus(match.value, wr.value, req.value);
    result.innerHTML = `You need about <b>${resultNum}</b> wins without losing to get a <b>${req.value}%</b> win rate`;
}

const rumus = (match, wr, req) => {
    const tWin = match * (wr / 100);
    const tLose = match - tWin;
    const sisaWr = 100 - req;
    const wrResult = 100 / sisaWr;
    const seratusPersen = tLose * wrResult;
    const final = seratusPersen - match;
    return Math.round(final);
}

document.querySelector("#count").addEventListener("click", calculateWin);