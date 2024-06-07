const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">
        {title}
        {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
      </h2>
    </>
  );
};

export default Header;
