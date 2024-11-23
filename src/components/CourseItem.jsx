const CourseItem = ({ course }) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-[5px] shadow-[0_2px_4px_0_rgba(0, 0, 0, 0.3)]">
      <div className="grid grid-cols-[80px_1fr_auto] gap-5 items-start pb-4 border-b">
        <img src={course?.logo} alt={course?.name} loading="lazy" />
        <div>
          <h2 className="text-red text-2xl font-semibold mb-1">
            {course?.name}
          </h2>
          <p className="text-grey text-xl font-medium mb-6">
            {course?.faculty?.name}
          </p>
          <p className="text-grey text-xl font-light">
            {course?.faculty?.university?.name}
          </p>
        </div>
        <button
          className="w-6"
          title={`Liked: ${(course?.likes).toLocaleString()}`}
        >
          <img src="/heart.svg" alt="" loading="lazy" className="w-[27px]" />
        </button>
      </div>
      <div className="py-4">
        <div className="flex flex-wrap gap-x-[23px] items-center mb-12">
          <p className="text-xl text-[#5f5f5f] font-light">รอบที่เปิด</p>
          <ol className="flex items-center gap-2">
            {course?.roundSeats?.map((rs, index) => (
              <li
                key={index}
                className={`w-[29px] h-[29px] rounded-full text-white grid place-items-center text-lg font-medium ${
                  rs <= 0 ? "bg-[#d8d8d8]" : "bg-green"
                }`}
              >
                {index + 1}
              </li>
            ))}
          </ol>
        </div>
        {course?.score && (
          <>
            <div className="flex justify-between items-center gap-4 mb-5">
              <p className="text-red font-semibold">
                รอบที่ 4 : {course?.score?.scoreType}
              </p>
              <button className="flex items-center gap-x-3 text-red text-xs font-medium border border-red rounded-full py-2 pl-5 pr-[10px]">
                แก้ไขคะแนน
                <img src="/calc.svg" alt="" loading="lazy" />
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="px-[27px]">
                <img src="/badge.svg" alt="" loading="lazy" />
              </div>
              <div className="text-right text-[#4a4a4a] font-light">
                <p className="text-xs">คะแนนของคุณคือ</p>
                <p className="text-[42px]">
                  {Math.floor(course?.score?.max).toLocaleString()}
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-3 text-center text-[#5f5f5f] divide-x">
              <li className="flex flex-col text-[16.8px]">
                {Math.floor(course?.score?.min).toLocaleString()}
                <small className="text-[11.2px]">คะแนนต่ำสุด 60</small>
              </li>
              <li className="flex flex-col text-[16.8px]">
                {Math.floor(course?.score?.avg).toLocaleString()}
                <small className="text-[11.2px]">คะแนนเฉลี่ย 60</small>
              </li>
              <li className="flex flex-col text-[16.8px]">
                {Math.floor(course?.score?.max).toLocaleString()}
                <small className="text-[11.2px]">คะแนนสูงสุด 60</small>
              </li>
            </ul>
            <div className="pt-4 border-t mt-4">
              <button className="text-teal font-light inline-flex items-center gap-x-[18px]">
                <span className="icon-triangle"></span>ดูสัดส่วนคะแนน
              </button>
            </div>
          </>
        )}
      </div>
      <div className="pt-4 flex justify-between gap-4 items-center mt-auto border-t">
        <p className="text-grey text-xs">
          {(course?.likes).toLocaleString()}{" "}
          <span className="italic">คนที่สนใจ</span>
        </p>
        <button className="w-[18px]">
          <img src="/share.svg" alt="" loading="lazy" />
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
