const QuickLink = (props) => {
  return (
    <div
      className="grow mb-6 bg-amber-200 px-2 h-full rounded-md flex justify-center items-center shadow-sm snap-start"
      onClick={() => props.setSortType("ko")}
    >
      ប្រែសេចក្តី
    </div>
  );
};

export default QuickLink;
