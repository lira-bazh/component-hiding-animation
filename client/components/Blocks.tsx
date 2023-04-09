import React, { useState } from 'react'

export const Blocks = () => {
  const [activeItem, setAtciveItem] = useState<string | null>(null);

  const handleClick = (name: string): void => {
    if (activeItem) {
      setAtciveItem(null);
    } else {
      setAtciveItem(name);
    }
  };

  const getStyles = (name: string): string => {
    const styles = ["block"];
    if (name === activeItem || activeItem === null) {
      styles.push("show");
    } else {
      styles.push("hide");
    }

    return styles.join(" ");
  };

  const getProps = (name: string) => {
    return {
      className: getStyles(name),
      onClick: () => handleClick(name),
      title: "Click me"
    };
  };

  return (
    <>
      <div {...getProps("one")}>1</div>
      <div {...getProps("two")}>2</div>
      <div {...getProps("three")}>3</div>
      <div {...getProps("four")}>4</div>
      <div {...getProps("five")}>5</div>
    </>
  );
}
