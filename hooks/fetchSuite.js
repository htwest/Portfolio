const suits = ["♠", "♣", "♥", "♦"];

export default function fetchSuite() {
  const index = Math.floor(Math.random() * 4);
  return suits[index];
}
