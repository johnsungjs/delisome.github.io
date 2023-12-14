export function saveHistoryToLocalStorage(data) {
  const storage = JSON.parse(localStorage.getItem("recentViewed") || "[]");

  //no history duplicate
  if (storage[0].name === data.name) {
    return;
  }

  if (storage.length < 10) {
    storage.unshift(data);
  } else {
    storage.pop();
    storage.unshift(data);
  }

  localStorage.setItem("recentViewed", JSON.stringify(storage));
}