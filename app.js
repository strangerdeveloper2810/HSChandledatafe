const permissionGroup = {
  CASH: [
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_ALLOWDAYTRADING",
      permissionName: "Cho phép day-trading",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "CASH",
      groupPermissionName: "Tiền ",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_CASHDEPOSIT",
      permissionName: "Nộp tiền",
      editField: {
        isEditField: true,
        value: true,
      },
      groupPermissionCode: "CASH",
      groupPermissionName: "Tiền ",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_CASHWITHDRAWAL",
      permissionName: "Rút tiền",
      editField: {
        isEditField: true,
        value: true,
      },
      groupPermissionCode: "CASH",
      groupPermissionName: "Tiền ",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_INTERNALTRANSFER",
      permissionName: "Chuyển tiền nội bộ",
      editField: {
        isEditField: true,
        value: true,
      },
      groupPermissionCode: "CASH",
      groupPermissionName: "Tiền ",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_RIGHTSUBSCRIPTION",
      permissionName: "Thực hiện quyền",
      editField: {
        isEditField: true,
        value: true,
      },
      groupPermissionCode: "CASH",
      groupPermissionName: "Tiền ",
    },
  ],
  EXCEPT: [
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "FORBID_NOINSTRUMENTDEPOSIT",
      permissionName: "Không được phép lưu ký chứng khoán",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "EXCEPT",
      groupPermissionName: "Quyền hạn chế",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "FORBID_NOINSTRUMENTWITHDRAWAL",
      permissionName: "Không được phép rút/chuyển chứng khoán",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "EXCEPT",
      groupPermissionName: "Quyền hạn chế",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "FORBID_NOINTERNETTRADE",
      permissionName: "Không giao dịch trực tuyến",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "EXCEPT",
      groupPermissionName: "Quyền hạn chế",
    },
  ],
  TRADING: [
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_BUYONLY",
      permissionName: "Chỉ được mua",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "TRADING",
      groupPermissionName: "Giao dịch",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_SELLONLY",
      permissionName: "Chỉ được bán",
      editField: {
        isEditField: true,
        value: false,
      },
      groupPermissionCode: "TRADING",
      groupPermissionName: "Giao dịch",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "EXECUTE_TRADING",
      permissionName: "Quyền giao dịch",
      editField: {
        isEditField: true,
        value: true,
      },
      groupPermissionCode: "TRADING",
      groupPermissionName: "Giao dịch",
    },
  ],
  NORMAL: [
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "VIEW_ACCOUNTBALANCE",
      permissionName: "Xem số dư tài khoản",
      editField: {
        isEditField: false,
        value: true,
      },
      groupPermissionCode: "NORMAL",
      groupPermissionName: "Quyền cơ bản",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "VIEW_MARGIN",
      permissionName: "Xem Trạng thái ký quỹ",
      editField: {
        isEditField: false,
        value: true,
      },
      groupPermissionCode: "NORMAL",
      groupPermissionName: "Quyền cơ bản",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "VIEW_PROFITANDLOSS",
      permissionName: "Xem lãi/lỗ danh mục",
      editField: {
        isEditField: false,
        value: true,
      },
      groupPermissionCode: "NORMAL",
      groupPermissionName: "Quyền cơ bản",
    },
    {
      activeChannelCode: "COUNTER",
      activeChannelName: "Tại quầy",
      permissionCode: "VIEW_TRANSACTIONSTATEMENT",
      permissionName: "Xem sao kê giao dịch",
      editField: {
        isEditField: false,
        value: true,
      },
      groupPermissionCode: "NORMAL",
      groupPermissionName: "Quyền cơ bản",
    },
  ],
};
permissionGroup.CASH.map((item, index) => {
  console.log("CASH,index", { index, item });
});

permissionGroup.EXCEPT.map((item, index) => {
  console.log("EXCEPT,index", { index, item });
});

// const indexesWithEditFieldTrue = permissionGroup.CASH.map((item, index) => ({
//   index,
//   value: item.editField.value,
// }))
//   .filter((item) => item.value)
//   .map((item) => item.index);

// console.log(indexesWithEditFieldTrue, 'indexesWithEditFieldTrue');

// const indexesWithEditFieldTrue = permissionGroup.CASH.map((item, index) => ({
//   index,
//   value: item.editField.value,
// }))
//   .filter((item) => item.value)
//   .map((item) => item.index);

// console.log(indexesWithEditFieldTrue, "indexesWithEditFieldTrue");

