/* Silly plugin to init table sorter on tables with data-sort */

!function( $ ){

  var Tablesort = function (tables) {
    if(tables.length > 0){
      tables.tablesorter({ sortList: [[0,0]] });
    }
  }
  $(document).ready(function () {
    new Tablesort($('table[data-sort]'));
  })

}( window.jQuery)