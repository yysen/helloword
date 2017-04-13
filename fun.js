      function creatable() {
          var str = "<table class='table table-bordered' ><tbody>";
          var row = Math.ceil(Math.random() * 40 + 10);
          var col = Math.ceil(Math.random() * 400 + 100);
          for (var i = 0; i < row; i++) {
              str += "<tr>"; 
              for (var j = 0; j < col; j++) {
                  str += "<td>"; 
                  if (i == 0) {
                      str += j + 1;
                  } else if (j == 0) {
                      str += i + 1;
                  } else {
                      str += Math.ceil(Math.random() * 100);
                  }
                  str += "</td>";
              }
              str += "</tr>";

          }
          str += "</tbody></table>"; 


          document.getElementById("creattable").innerHTML = str;
      }

      function creatable1() {
          var str = "<table class='table table-bordered' ><tbody>";
          var strarray = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
          var row = Math.ceil(Math.random() * 40 + 10);
          var col = Math.ceil(Math.random() * 400 + 100);
          for (var i = 0; i < row; i++) {
              str += "<tr>"; 
              for (var j = 0; j < col; j++) {
                  str += "<td>"; 
                  if (i == 0) {
                      str += j + 1;
                  } else if (j == 0) {
                      str += i + 1;
                  } else {
                      str += strarray.charAt(Math.ceil(Math.random() * (strarray.length - 1)));
                  }
                  str += "</td>";
              }
              str += "</tr>";

          }
          str += "</tbody></table>"; 


          document.getElementById("creattable").innerHTML = str;

      }