const students = ["Eden", "Refael", "Yoni", "Nitzan", "Hadas"];

const attendees = [
  ["Eden", "Refael", "Yoni", "Nitzan", "Hadas", "Ortal"],
  ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"],
  ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"],
  ["Edn", "Andrew", "Yoni", "Nitzan", "Ortal", "Nitzan"],
];

const topNStudentsAttendees = (students, attendees, N) => {
  const uniqueElements = new Set(attendees);

  attendees.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
    } else {
      return item;
    }
    return [...new Set(uniqueElements)];
  });
};
topNStudentsAttendees(students, attendees, 3);
console.log(topNStudentsAttendees);
