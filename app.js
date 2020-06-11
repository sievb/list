$(function () {
  initTable();
});

var $table = $("#itemList");
var $button = $("#removeBtn");

function initTable() {
  $table.bootstrapTable("destroy").bootstrapTable({
    columns: [
      [
        {
          field: "state",
          checkbox: true,
          align: "center",
          valign: "middle",
        },
        {
          title: "Location",
          field: "location",
          align: "center",
          valign: "middle",
        },
        {
          title: "Item",
          field: "item",
          align: "center",
        },
        {
          title: "Quantity",
          field: "quantity",
          align: "center",
        },
      ],
    ],
  });
}

$("input").keydown(function (e) {
  if (e.keyCode == 13) {
    createRow();
  }
});

$("#addBtn").click(function () {
  createRow();
});

function createRow() {
  let location = $("#location").val();
  let item = autoCapitalize($("#item").val());
  let quantity = $("#quantity").val();
  $table = $("#itemList");

  $table.bootstrapTable("append", [
    {
      location: location,
      item: item,
      quantity: quantity,
    },
  ]);

  clearInputs();
  $("#location").focus();
  return false;
}

function clearInputs() {
  $("#location").val("");
  $("#item").val("");
  $("#quantity").val("");
}

$("#removeBtn").click(function () {
  var ids = $.map($table.bootstrapTable("getSelections"), function (row) {
    return row.location;
  });

  $table.bootstrapTable("remove", {
    field: "location",
    values: ids,
  });
});

$("#clearBtn").click(function () {
  $table.bootstrapTable("removeAll");
});

function autoCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

