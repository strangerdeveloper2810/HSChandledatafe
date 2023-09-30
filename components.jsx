import React, { useMemo } from "react";

// Định nghĩa kiểu dữ liệu cho permissionGroup
interface PermissionGroup {
  groupPermissions: {
    permissions: {
      activeChannelName: string,
    }[],
  }[];
}

const YourComponent: React.FC<{ permissionGroup: PermissionGroup }> = ({
  permissionGroup,
}) => {
  const renderActiveChannelName = useMemo(() => {
    const groupPermissions = Object.values(permissionGroup);
    const activeChannelNames: string[] = [];

    groupPermissions.forEach((group) => {
      group.permissions.forEach((permission) => {
        let { activeChannelName } = permission;
        if (!activeChannelName) {
          activeChannelName = "other";
        }
        if (!activeChannelNames.includes(activeChannelName)) {
          activeChannelNames.push(activeChannelName);
        }
      });
    });

    return activeChannelNames; // Return giá trị để sử dụng trong component của bạn
  }, [permissionGroup]);

  // Hiển thị các giá trị activeChannelName trong React component
  return (
    <div>
      <h3>Active Channel Names</h3>
      <ul>
        {renderActiveChannelName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
