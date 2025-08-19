
// // let main = document.getElementById("main");
// // console.log(main);

// // main.innerHTML="Hii this is uttam maurya"
// // console.log(main);

//   const main = document.getElementById("main");

//   // Create and append
//   const p = document.createElement("p");
//   p.textContent = "Hello from JS!";
//   main.appendChild(p);

//   // Add class
//   main.classList.add("highlight");

//   // Set attribute
//   main.setAttribute("title", "I am main div");

//   // Get content
//   console.log(main.innerHTML);



 const main = document.getElementById("main");

    // Create img element
    const img = document.createElement("img");

    // Set attributes
    img.src = "https://thumbs.dreamstime.com/b/autumn-along-tennessee-foot-hills-parkway-runs-smoky-mountains-oldest-unfinished-highway-state-missing-164461409.jpg"; // image URL
    img.alt = "Sample Image";
    img.width = 150;  // optional width
    img.height = 150; // optional height

    // Append to main div
    main.appendChild(img);