function getCourseInfo() {
  return fetch('https://golf-courses-api.herokuapp.com/courses/11819').then(
    (response) => response.json()
  );
}

let coursePromise = getCourseInfo();

coursePromise.then((data) => {
  const course = data.data;

  course.holes.forEach((hole) => {
    document.body.innerHTML += `
        <div>
            <p>${hole.teeBoxes[0].par}</p>
            <p>${hole.teeBoxes[0].yards}</p>
            <p>${hole.teeBoxes[0].hcp}</p>
        </div>`;
  });
});
