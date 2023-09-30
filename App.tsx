import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { AccordionDetails, Box, Grid, Typography } from "@mui/material";
import { AppCheckBoxField } from "@crema/core/AppFormComponents/AppCheckBoxField";
import { useSelector } from "react-redux";
import { AppState } from "core/store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import _ from "lodash";
import {
  AppAccordionSummary,
  AppAccordionWithoutGap,
} from "@crema/core/AppFormComponents/AppAccordionWithoutGap";
import { getNewListPermissions } from "../../account-info.utils";

interface ComponentProps {
  permissionGroup: any;
  index: number;
  isUpdateAccount: boolean;
}

type Props = ComponentProps;

export const AccountPermissionItem: React.FunctionComponent<Props> = ({
  permissionGroup,
  index,
  isUpdateAccount,
}) => {
  const { values, setFieldValue, initialValues } = useFormikContext<any>();
  const [arraySelect, setArraySelect] = useState<any[]>([]);
  const { apAccount, isHighlightAdd } = useSelector(
    (state: AppState) => state.accountManagement
  );
  const [expanded, setExpanded] = useState(true);
  // const [newPermissionState, setNewPermissionState] = useState(permissionGroup);
  console.log("permissionGroup", permissionGroup);
  const { CASH, EXCEPT, NORMAL, TRADING } = permissionGroup;

  // const selectItem = useMemo(() => {
  //   let dataSelect = {
  //     isEditFieldAll: false,
  //     isSelectFieldAll: false,
  //     isIndeterminate: false,
  //   };
  //   values?.permission?.groupPermissions?.forEach((item) => {
  //     if (item?.groupPermissionCode === permissionGroup?.groupPermissionCode) {
  //       const selectPermission = item?.permissions?.filter((item) => {
  //         return item?.editField?.value;
  //       });
  //       setArraySelect(selectPermission);

  //       const isEditField = item?.permissions?.filter((item) => {
  //         return !item?.editField?.isEditField;
  //       });
  //       if (isEditField.length === item?.permissions.length) {
  //         dataSelect = { ...dataSelect, isEditFieldAll: true };
  //       }
  //       if (selectPermission.length === item?.permissions.length) {
  //         dataSelect = { ...dataSelect, isSelectFieldAll: true };
  //       }
  //       if (
  //         selectPermission.length > 0 &&
  //         selectPermission.length < item?.permissions.length
  //       ) {
  //         dataSelect = { ...dataSelect, isIndeterminate: true };
  //       }
  //     }
  //   });
  //   return dataSelect;
  // }, [values]);

  // const isHighlightUpdate = useMemo(() => {
  //   for (const itemValue of initialValues?.permission?.groupPermissions) {
  //     if (
  //       permissionGroup?.groupPermissionCode === itemValue?.groupPermissionCode
  //     ) {
  //       return compareArray(
  //         permissionGroup?.permissions,
  //         itemValue?.permissions
  //       );
  //     }
  //   }
  //   return false;
  // }, [values]);

  // const onCheckAll = () => {
  //   if (!arraySelect.length) {
  //     const newArr = permissionGroup?.permissions?.map((object) => {
  //       if (object?.editField?.isEditField) {
  //         return { ...object, editField: { ...object.editField, value: true } };
  //       }
  //       return object;
  //     });
  //     setFieldValue(`permission.${index}.permissions`, newArr);
  //   } else {
  //     const newArr = permissionGroup?.permissions?.map((object) => {
  //       if (object?.editField?.isEditField) {
  //         return {
  //           ...object,
  //           editField: { ...object.editField, value: false },
  //         };
  //       }
  //       return object;
  //     });
  //     setFieldValue(`permission.${index}.permissions`, newArr);
  //   }
  // };
  const checkHighlightChange = (
    data: any[],
    code: string,
    activeChannelCode: string
  ) => {
    const findPermissionRequestChange = data?.find(
      (item) =>
        item?.permissionCode === code &&
        item?.activeChannelCode === activeChannelCode
    );
    return Boolean(findPermissionRequestChange);
  };

  // const hasValueApproval = useCallback(
  //   (data) => {
  //     for (let index = 0, l = data.length; index < l; index += 1) {
  //       if (
  //         apAccount?.accountPermissions?.[0]?.groupPermissions.find(
  //           (item) => item.permissionCode === data[index]?.permissionCode
  //         )
  //       ) {
  //         return "color-input-highlight";
  //       }
  //     }
  //     return "";
  //   },
  //   [apAccount]
  // );
  useEffect(() => {
    if (permissionGroup?.groupPermissionCode === "TRADING") {
      const currentPermissionCode = _.find(
        values?.permission?.groupPermissions,
        {
          groupPermissionCode: "TRADING",
        }
      )
        ?.permissions.find((item) => {
          return item?.editField?.value === true;
        })
        ?.permissionCode?.split("_");

      if (currentPermissionCode) {
        const newPermissionList = getNewListPermissions(
          currentPermissionCode,
          permissionGroup?.permissions
        );
        setNewPermissionState({
          ...newPermissionState,
          permissions: newPermissionList,
        });
      } else {
        setNewPermissionState(permissionGroup);
      }
    }
  }, [values?.permission]);

  return (
    <>
      {/* {CASH && (
        <Box>
          {CASH.map((item) => (
            <Box>{item.permissionName}</Box>
          ))}
        </Box>
      )}
      {EXCEPT && (
        <Box>
          {EXCEPT.map((item) => (
            <Box>{item.permissionName}</Box>
          ))}
        </Box>
      )}
      {NORMAL && (
        <Box>
          {NORMAL.map((item) => (
            <Box>{item.permissionName}</Box>
          ))}
        </Box>
      )} */}
      {/* {CASH && (
        <Box>
          {CASH.map((item) => (
            <Box>{item.permissionName}</Box>
          ))}
        </Box>
      )} */}
    </>
  );
};
