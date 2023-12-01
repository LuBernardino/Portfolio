import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";

const DynamicIcon = ({ icon, className, size = 30 }) => {
  const getIcon = (iconName) => {
    const iconsMap = new Map();
    iconsMap.set("Bs", bsIcons);
    iconsMap.set("Ai", aiIcons);
    iconsMap.set("Bi", biIcons);
    iconsMap.set("Gi", giIcons);
    iconsMap.set("Fa", faIcons);
    iconsMap.set("Tb", tbIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} size={size} />;
};

export default DynamicIcon;
