use CoursePortalDB

db.createCollection("courses")

db.courses.insertOne({
    courseId: 101,
    courseName: "Python Programming",
    instructor: "Arun",
    category: "Programming",
    duration: 8,
    price: 1500,
    enrolled: 45
})