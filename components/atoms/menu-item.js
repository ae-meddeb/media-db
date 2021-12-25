export default function MenuItem(props) {
    const { children } = props;

    return (
      <div className="menu-item">
          { children }
      </div>
    )
  }