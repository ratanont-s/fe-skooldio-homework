import CourseItem from "./CourseItem";

const CourseList = ({ courses }) => {
  return (
    <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {courses?.map((course) => (
        <CourseItem key={course?.id} course={course} />
      ))}
    </ul>
  );
};

export default CourseList;
