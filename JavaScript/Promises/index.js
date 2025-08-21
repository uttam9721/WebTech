// Using fetch with Promises
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json(); // Convert response to JSON
  })
  .then((data) => {
    console.log("Posts data:", data); // Work with the data
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
