// A mapping function that converts day to the index for some arrays in the program.
function dayToIndex(day) {
  switch (day) {
    case 'Monday' :
      return 0;
    case 'Tuesday' :
      return 1;
    case 'Wednesday' :
      return 2;
    case 'Thursday' :
      return 3;
    case 'Friday' :
      return 4;
  }
}

// A mapping function that converts hour to the index for some arrays in the program.
function hourToIndex(hour) {
  switch (hour) {
    case '8:30' :
      return 0;
    case '9:30' :
      return 1;
    case '10:30' :
      return 2;
    case '11:30' :
      return 3;
    case '12:30' :
      return 4;
    case '13:30' :
      return 5;
    case '14:30' :
      return 6;
    case '15:30' :
      return 7;
    case '16:30' :
      return 8;
  }
}

// Mapping function that converts year to the index for some arrays in the program.
function yearToIndex(year) {
  return year - 1;
}

class Classroom {
  constructor(id, capacity) {
    this.id = id;
    this.capacity = capacity;
    this.arr = [
      // Monday
      [ //   08:30          09:30          ...
        {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}
      ],
      // Tuesday
      [
        {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}
      ],
      // Wednesday
      [
        {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}
      ],
      // Thursday
      [
        {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}
      ],
      // Friday
      [
        {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}, {busy: false}
      ]
    ];
  }

  // Method to reserve specified day & hour for the classroom.
  occupy(day, hour) {
    this.arr[dayToIndex(day)][hourToIndex(hour)].busy = true;
  }

  // Method to make classroom free for the specified day & hour.
  makeAvailable(day, hour) {
    this.arr[dayToIndex(day)][hourToIndex(hour)].busy = false;
  }

  makeAllDaysAndHoursAvailable() {
    for (let day of weekDays) {
      for (let hour of hoursInSchedule) {
        this.makeAvailable(day, hour);
      }
    }
  }

  isOccupied(day, hour) {
    return this.arr[dayToIndex(day)][hourToIndex(hour)].busy;
  }
}

class Instructor {
  constructor(name) {
    this.name = name;
    this.busyHours = [
      [], // Monday
      [], // Tuesday
      [], // Wednesday
      [], // Thursday
      []  // Friday
    ];
  }

  addBusyHour(day, hour) {
    this.busyHours[dayToIndex(day)].push(hour);
  }

  isBusy(day, hour) {
    return this.busyHours[dayToIndex(day)].includes(hour);
  }

  isAvailable(day, hour) {
    return !this.isBusy(day, hour);
  }
}

class Course {
  constructor(code, name, year, credit, compulsoryOrElective, departmentOrService, numberOfStudents, instructor, hoursPreference) {
    this.code = code;
    this.name = name;
    this.year = year;
    this.credit = credit;
    this.compulsoryOrElective = compulsoryOrElective;
    this.departmentOrService = departmentOrService;
    this.numberOfStudents = numberOfStudents;
    this.instructor = instructor;
    this.hoursPreference = hoursPreference;
  }

  isService() {
    return this.departmentOrService === "S";
  }
}

// This class represents the schedule for a specific year (1st year, 2nd year, ...)
class SubSchedule {
  constructor() {
    // if courseCode === ' ' and classroomName === ' ', it means that there is no assigned course in that hour yet.
    // However, a course may be unassigned via unassignExistingCourse method in the class Schedule.
    this.arr = [
      [ // Monday
        {courseCode: ' ', classroomName: ' '}, // 08:30
        {courseCode: ' ', classroomName: ' '}, // 09:30
        {courseCode: ' ', classroomName: ' '}, // 10:30
        {courseCode: ' ', classroomName: ' '}, // 11:30
        {courseCode: ' ', classroomName: ' '}, // 12:30
        {courseCode: ' ', classroomName: ' '}, // 13:30
        {courseCode: ' ', classroomName: ' '}, // 14:30
        {courseCode: ' ', classroomName: ' '}, // 15:30
        {courseCode: ' ', classroomName: ' '}, // 16:30
      ],
      [ // Tuesday
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
      ],
      [ // Wednesday
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
      ],
      [ // Thursday
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
      ],
      [ // Friday
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
        {courseCode: ' ', classroomName: ' '},
      ]
    ];
  }

  hasAssignedCourse(day, hour) {
    const element = this.arr[dayToIndex(day)][hourToIndex(hour)];
    return !(element.courseCode === ' ' && element.classroomName === ' ');
  }
}

let serviceCoursesData; // this must be declared here since it will be used in assignServiceCourses().

class Schedule {
  constructor() {
    this.subSchedules = [
      new SubSchedule(), // 1st year
      new SubSchedule(), // 2nd year
      new SubSchedule(), // 3rd year
      new SubSchedule()  // 4th year
    ]
  }

  findAppropriateClassroom(course, day, hours) {
    return classrooms.find(classroom => {
      return classroom.capacity >= course.numberOfStudents &&
        hours.every(hour => !classroom.isOccupied(day, hour)) &&
        hours.every(hour => !this.subSchedules[yearToIndex(course.year)].hasAssignedCourse(day, hour)) &&
        hours.every(hour => !course.instructor.isBusy(day, hour));
    });
  }

  assignServiceCourse(courseCode, day, hours) {
    const courseToAdd = courses.find(course => courseCode === course.code);
    const appropriateClassroom = this.findAppropriateClassroom(courseToAdd, day, hours);

    // Display an error message, and abort the schedule if there is no appropriate classroom for the courseToAdd.
    if (appropriateClassroom === undefined) {
      throw new Error(`Course ${courseToAdd.code} could not be added to the schedule. Please increase the number of classrooms or capacity of the existing classrooms.`);
    }

    // Find the subList according to the year of the courseToAdd and which day this course will be given.
    const subSchedule = this.subSchedules[yearToIndex(courseToAdd.year)];
    const subList = subSchedule.arr[dayToIndex(day)];

    // Then assign this course if everything is alright.
    for (let hour of hours) {
      const index = hourToIndex(hour);
      subList[index].courseCode = courseToAdd.code;
      subList[index].classroomName = appropriateClassroom.id;
      appropriateClassroom.occupy(day, hour);
    }
  }

  // Parse service.csv & add those courses into the schedule.
  assignAllServiceCourses() {
    if (serviceCoursesData === undefined) {
      throw new Error('Please make sure to upload service courses file.');
    }
    const lines = serviceCoursesData.split('\n');
    lines.forEach(line => {
      const [courseCode, day] = line.split(',');
      const hoursString = line.substring(line.indexOf('"') + 1, line.lastIndexOf('"'));
      const [...hours] = hoursString.split(',');
      this.assignServiceCourse(courseCode, day, hours);
    });
  }

  // Method that assigns single course.
  assignDepartmentCourse(courseToAdd, courseDuration) {
    const instructor = courseToAdd.instructor;
    const subSchedule = this.subSchedules[yearToIndex(courseToAdd.year)];

    for (let i = 0; i < weekDays.length; i++) { // will iterate 5 times
      const subList = subSchedule.arr[i];
      for (let j = 0; j < hoursInSchedule.length - (courseDuration - 1); j++) { // will iterate 7 times, when hoursPref = 3
        const hoursSlice = hoursInSchedule.slice(j, j + courseDuration);

        // If the instructor is available in this slice, find the appropriate classroom and assign the course.
        if (hoursSlice.every(hour => instructor.isAvailable(weekDays[i], hour))) {
          const appropriateClassroom = this.findAppropriateClassroom(courseToAdd, weekDays[i], hoursSlice);

          // If the instructor is available, but appropriate class not found for this slice,
          // continue to search appropriate classroom for other hour slices.
          if (appropriateClassroom === undefined) {
            continue;
          }

          hoursSlice.forEach(hour => {
            const index = hourToIndex(hour);
            subList[index].courseCode = courseToAdd.code;
            subList[index].classroomName = appropriateClassroom.id;
            appropriateClassroom.occupy(weekDays[i], hour);
          });

          return; // Terminate this method if the course is assigned successfully.
        }
      }
    }
    // If the iteration ends without encountering the return statement in line 297, it means that there is no appropriate classroom for this course.
    throw new Error(`Course ${courseToAdd.code} could not be added to the schedule. Please increase the number of classrooms or capacity of the existing classrooms.`);
  }

  // Helper method to assign courses that have 2+1 hoursPref. This method is responsible for assigning that +1 hour.
  assignRemainingHour(courseToAdd) {
    let dayOfFirstSession = undefined;
    for (let day of weekDays) {
      const subList = this.subSchedules[yearToIndex(courseToAdd.year)].arr[dayToIndex(day)];
      for (let hour of hoursInSchedule) {
        if (subList[hourToIndex(hour)].courseCode === courseToAdd.code) {
          dayOfFirstSession = day;
          break;
        }
      }
    }

    for (let otherDay of weekDays) {
      if (otherDay === dayOfFirstSession) {
        continue;
      }

      const subList = this.subSchedules[yearToIndex(courseToAdd.year)].arr[dayToIndex(otherDay)];
      for (let hour of hoursInSchedule) {
        const appropriateClassroom = this.findAppropriateClassroom(courseToAdd, otherDay, [hour]);

        if (appropriateClassroom === undefined) {
          continue;
        }

        const index = hourToIndex(hour);
        subList[index].courseCode = courseToAdd.code;
        subList[index].classroomName = appropriateClassroom.id;
        appropriateClassroom.occupy(otherDay, hour);
        return;
      }
      throw new Error('Course ${courseToAdd.code} could not be added to the schedule. Please increase the number of classrooms or capacity of the existing classrooms.');
    }
  }

  assignAllDepartmentCourses() {
    courses.filter(course => !course.isService()).forEach(course => {
      const hoursPref = course.hoursPreference;
      // hoursPref = 3
      if (hoursPref.indexOf('+') === -1) {
        this.assignDepartmentCourse(course, parseInt(hoursPref));
      }
      // hoursPref = 2 + 1
      else {
        this.assignDepartmentCourse(course, parseInt(hoursPref.substring(0, hoursPref.indexOf('+')))); // assign for 2 hours
        this.assignRemainingHour(course); // assign +1 hour
      }
    });
  }

  addNewCourse() {
    const code = document.getElementById('newCourseCode').value;
    const name = document.getElementById('newCourseName').value;
    const year = document.getElementById('newCourseYear').value;
    const credit = document.getElementById('newCourseCredit').value;
    const c_or_e = document.getElementById('newCourse_c_or_e').value;
    const d_or_s = document.getElementById('newCourse_d_or_s').value;
    const numberOfStudents = document.getElementById('newCourseNumberOfStudents').value;
    const instructorName = document.getElementById('newCourseInstructorName').value;
    const hoursPreference = document.getElementById('newCourseHoursPreference').value;

    let instructor = instructors.find(i => i.name === instructorName);

    // If the instructor does not exist in the instructors array, push that instructor into the array.
    // This is needed because same instructor may offer different courses.
    if (!instructor) {
      instructor = new Instructor(instructorName);
      instructors.push(instructor);
    }

    const course = new Course(code, name, year, credit, c_or_e, d_or_s, parseInt(numberOfStudents), instructor, hoursPreference);

    // If the course exists, then display an error message and terminate the method.
    if (courses.find(c => c.code === code && c.name === name) !== undefined) {
      alert(`Failed to add course ${code} (${name}). A course with the same code and same name already exists!`);
      return;
    }

    if (courses.find(c => c.code === code) !== undefined) {
      alert(`Failed to add course ${code} (${name}). A course with the same code already exists!`);
      return;
    }

    if (courses.find(c => c.name === name) !== undefined) {
      alert(`Failed to add course ${code} (${name}). A course with the same name already exists!`);
      return;
    }

    courses.push(course);

    if (hoursPreference === '3') {
      this.assignDepartmentCourse(course, 3);
    }
    // hoursPreference === '2 + 1'
    else {
      this.assignDepartmentCourse(course, 2);
      this.assignRemainingHour(course);
    }

    tableCreator();
  }

  unassignExistingCourse(courseToUnassign) {
    const subSchedule = this.subSchedules[yearToIndex(courseToUnassign.year)];
    for (let day of weekDays) {
      for (let hour of hoursInSchedule) {
        let currentElement = subSchedule.arr[dayToIndex(day)][hourToIndex(hour)];
        if (currentElement.courseCode === courseToUnassign.code) {
          const classroom = classrooms.find(cRoom => cRoom.id === currentElement.classroomName);
          classroom.makeAvailable(day, hour);
          currentElement.courseCode = ' ';
          currentElement.classroomName = ' ';
        }
      }
    }
  }

  updateExistingCourseInformation(courseToUpdated, year, numberOfStudents, hoursPreference) {
    this.unassignExistingCourse(courseToUpdated);
    courseToUpdated.year = year;
    courseToUpdated.numberOfStudents = parseInt(numberOfStudents);
    courseToUpdated.hoursPreference = hoursPreference;
    if (hoursPreference === '3') {
      this.assignDepartmentCourse(courseToUpdated, 3);
    }
    // 2 + 1
    else {
      this.assignDepartmentCourse(courseToUpdated, 2);
      this.assignRemainingHour(courseToUpdated);
    }
    alert(`Course ${courseToUpdated.code} is successfully updated.`);
    tableCreator();
  }

  updateExistingClassroomCapacity(existingClassroom, newCapacity) {
    existingClassroom.capacity = newCapacity;
  }

  addNewClassroom() {
    const id = document.getElementById('newClassroomId').value;
    if (id.length === 0) {
      alert('Please enter a valid id!');
      return;
    }
    const capacity = document.getElementById('newClassroomCapacity').value;
    if (capacity.length === 0) {
      alert('Please enter a valid capacity!');
      return;
    }
    // If there is already a classroom with this id, display an error message.
    if (classrooms.find(c => c.id === id) !== undefined) {
      alert(`Failed to add classroom ${id} with capacity ${capacity}. A classroom with the same ID already exists!`);
      return;
    }
    const classroom = new Classroom(id, parseInt(capacity));


    classrooms.push(classroom);

    alert(`Classroom ${id} with the capacity ${capacity} has been added.`);
  }

  abortSchedule() {
    classrooms.forEach(classroom => classroom.makeAllDaysAndHoursAvailable());

    for (let subSchedule of this.subSchedules) {
      for (let day of weekDays) {
        for (let hour of hoursInSchedule) {
          subSchedule.arr[dayToIndex(day)][hourToIndex(hour)].courseCode = ' ';
          subSchedule.arr[dayToIndex(day)][hourToIndex(hour)].classroomName = ' ';
        }
      }
    }

    tableCreator();
  }
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const hoursInSchedule = ['8:30', '9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30'];
let coursesData;
let classroomsData;
let busyHoursData;

const classrooms = [];
const courses = [];
const instructors = [];
const schedule = new Schedule();

// Function to read the contents of the uploaded CSV file
function readCourses() {
  const fileInput = document.getElementById('coursesFile');
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  // Event listener for when the file is loaded
  fileReader.onload = function (e) {
    // Store the contents of the CSV file in the coursesData
    coursesData = e.target.result;
  };
  if (file) {
    // Read the file as text
    fileReader.readAsText(file);
  } else {
    alert('Please make sure to upload file that contains courses.');
  }
}

function readClassrooms() {
  const fileInput = document.getElementById('classroomFile');
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    classroomsData = e.target.result;
  }
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert('Please make sure to upload file that contains classrooms.');
  }
}

function readServiceCourses() {
  //const fileInput = document.querySelector('#serviceFile'); -> also ok
  const fileInput = document.getElementById('serviceFile');
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    serviceCoursesData = e.target.result;
  }
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert('Please make sure to upload file that contains service courses.');
  }
}

function readBusyHours() {
  const fileInput = document.getElementById('busyFile');
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    busyHoursData = e.target.result;
  }
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert('Please make sure to upload file that contains busy hours.');
  }
}

function parseClassrooms() {
  if (classroomsData === undefined) {
    alert('Please make sure to upload classrooms file.');
    return;
  }
  const lines = classroomsData.split('\n');
  lines.forEach(line => {
    const [id, capacity] = line.split(';');
    classrooms.push(new Classroom(id, parseInt(capacity)));
  });
  classrooms.sort((c1, c2) => c1.capacity - c2.capacity);
}

function parseCourses() {
  if (coursesData === undefined) {
    alert('Please make sure to upload courses file.');
    return;
  }
  const lines = coursesData.split('\n');
  lines.forEach(line => {
    const [code, name, year, credit, c_or_e, d_or_s, numberOfStudents, instructorName, hoursPreference] = line.split(',');
    const existingInstructor = instructors.find(instructor => instructor.name === instructorName);
    // If the specified instructor exists in the instructors array, push the course into the courses array.
    if (existingInstructor) {
      courses.push(new Course(code, name, year, credit, c_or_e, d_or_s, parseInt(numberOfStudents), existingInstructor, hoursPreference));
    }
    // If specified instructor is not found in the instructors array, add into the instructors array.
    else {
      const newInstructor = new Instructor(instructorName);
      courses.push(new Course(code, name, year, credit, c_or_e, d_or_s, parseInt(numberOfStudents), newInstructor, hoursPreference));
      instructors.push(newInstructor);
    }
  });
}

function parseBusyHours() {
  if (busyHoursData === undefined) {
    alert('Please make sure to upload busy hours file.');
    return;
  }
  const lines = busyHoursData.split('\n');
  lines.forEach(line => {
    const [instructorName, day] = line.split(',')
    const hoursString = line.substring(line.indexOf('"') + 1, line.lastIndexOf('"'));
    const [...hours] = hoursString.split(',');
    let instructor = instructors.find(instructor => instructor.name === instructorName);
    // If specified instructor is not found in the instructors array, add into the instructors array.
    if (!instructor) {
      const newInstructor = new Instructor(instructorName);
      instructors.push(newInstructor);
      instructor = newInstructor;
    }
    for (let hour of hours) {
      instructor.addBusyHour(day, hour);
    }
  });
}


function tableCreator() {
  let tableHtml = "<table>";

  tableHtml += "<tr>";
  tableHtml += "<th></th>";
  for (let year of [0, 1, 2, 3, 4]) {
    if (year === 0)
      tableHtml += "<th>" + "</th>";
    else
      tableHtml += "<th>" + year + "st Years" + "</th>";
  }
  tableHtml += "</tr>";

  for (let day of weekDays) {
    tableHtml += "<tr>";
    tableHtml += "<td>" + day + "</td>";
    for (let year of [0, 1, 2, 3, 4]) {
      tableHtml += "<td>";
      if (year === 0) {
        for (let hour of hoursInSchedule) {
          tableHtml += hour + "<br>";
        }
      } else {
        let cellContent = "";
        for (let hour of hoursInSchedule) {
          const courseCode = schedule.subSchedules[yearToIndex(year)].arr[dayToIndex(day)][hourToIndex(hour)].courseCode;
          const classroomName = schedule.subSchedules[yearToIndex(year)].arr[dayToIndex(day)][hourToIndex(hour)].classroomName;
          cellContent += courseCode + " - " + classroomName + "<br>";
        }
        tableHtml += cellContent || "&nbsp;"
      }
      tableHtml += "</td>";
    }
    tableHtml += "</tr>";
  }

  tableHtml += "</table>";
  document.getElementById('scheduleTable').innerHTML = tableHtml;
}

function toggleElementVisibility(elementId) {
  const fieldToHide = document.getElementById(elementId);
  if (fieldToHide.style.display === 'none') {
    fieldToHide.style.display = 'inline-block';
  } else {
    fieldToHide.style.display = 'none';
  }
}

function readAllFiles() {
  readCourses();
  readServiceCourses();
  readBusyHours();
  readClassrooms();
}

function parseDatas() {
  parseClassrooms();
  parseCourses();
  parseBusyHours();
}

function assignAllCourses() {
  try {
    schedule.assignAllServiceCourses();
    schedule.assignAllDepartmentCourses();
  }
    // If any error is thrown (for instance, if it is not possible to find a classroom for any course), abort the schedule.
  catch (err) {
    alert(err.message);
    schedule.abortSchedule();
  }
}

tableCreator();
