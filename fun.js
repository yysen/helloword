      function creatable() {
          $("#createtable").empty();

          var table = $("<table class='table table-striped'>");
          table.appendTo($("#createtable"));
          var row = Math.ceil(Math.random() * 40 + 10);
          var col = Math.ceil(Math.random() * 400 + 100);

          for (var i = 0; i < row; i++) {
              var tr = $("<tr></tr>");
              tr.appendTo(table);
              for (var j = 0; j < col; j++) {
                  if (i == 0) {
                      var td = $("<td>" + (j + 1).toString() + "</td>");
                      td.appendTo(tr);
                  }
                  if (i > 0 && j == 0) {
                      var td = $("<td>" + (i + 1).toString() + "</td>");
                      td.appendTo(tr);
                  }
                  if (i != 0 && j != 0) {
                      var td = $("<td>" + (Math.ceil(Math.random() * 100)).toString() + "</td>");
                      td.appendTo(tr);
                  }
              }
          }
          $("#createtable").append("</table>");
      }

      function creatable1() {
          $("#createtable").empty();

          var table = $("<table class='table table-bordered'>");
          table.appendTo($("#createtable"));
          var strarray = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
          var row = Math.ceil(Math.random() * 40 + 10);
          var col = Math.ceil(Math.random() * 400 + 100);
          for (var i = 0; i < row; i++) {
              var tr = $("<tr></tr>");
              tr.appendTo(table);
              for (var j = 0; j < col; j++) {
                  if (i == 0) {
                      var td = $("<td>" + (j + 1).toString() + "</td>");
                      td.appendTo(tr);
                  }
                  if (i > 0 && j == 0) {
                      var td = $("<td>" + (i + 1).toString() + "</td>");
                      td.appendTo(tr);
                  }
                  if (i != 0 && j != 0) {
                      var td = $("<td>" + strarray.charAt(Math.ceil(Math.random() * (strarray.length - 1))) + "</td>");
                      td.appendTo(tr);
                  }
              }
          }

          $("#createtable").append("</table>");

      }