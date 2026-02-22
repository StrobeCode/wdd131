const form = document.querySelector("#ccForm");
const message = document.querySelector("#message");

const cardNumber = document.querySelector("#cardNumber");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");

cardNumber.addEventListener("input", () => {
  const digits = cardNumber.value.replace(/\D/g, "").slice(0, 16);
  const groups = digits.match(/.{1,4}/g) || [];
  cardNumber.value = groups.join(" ");
});

[month, year, cvc].forEach((el) => {
  el.addEventListener("input", () => {
    el.value = el.value.replace(/\D/g, "");
  });
});

function setMessage(text, ok) {
  message.textContent = text;
  message.style.color = ok ? "green" : "red";
}

function notExpired(mmStr, yyStr) {
  const mm = Number(mmStr);
  const yy = Number(yyStr);

  if (!Number.isInteger(mm) || !Number.isInteger(yy)) return false;
  if (mm < 1 || mm > 12) return false;
  if (yy < 0 || yy > 99) return false;

  const fullYear = 2000 + yy;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (fullYear > currentYear) return true;
  if (fullYear < currentYear) return false;
  return mm >= currentMonth;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const digits = cardNumber.value.replace(/\D/g, "");
  const required = "1234123412341234";

  if (digits !== required) {
    setMessage("Invalid card number. Use 1234123412341234.", false);
    cardNumber.focus();
    return;
  }

  if (!notExpired(month.value, year.value)) {
    setMessage("Card is expired or expiration is invalid.", false);
    month.focus();
    return;
  }

  setMessage("Success! Form submitted.", true);
  form.reset();
});