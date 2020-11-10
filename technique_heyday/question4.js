function secondCall (data1) {
    $.ajax({
        type: "GET",
        url: url2,
        error: function(request, error) {
            _this.showErrorMessage(request.status, error);
        },
        success: function(data) {
            parse(data, {columns: true }, function(err, newOutput) {
                _this.globalOptions.data.denominatorData = newOutput;
                combined_value = data1 + _this.globalOptions.data.denominatorData;
             });
        }
    });

}

$.ajax({
      type: "GET",
      url: Url1,
      error: function(request, error) {
        _this.showErrorMessage(request.status, error);
      },
      success: function(data) {
        parse(data, {columns: true }, function(err, output) {
            _this.globalOptions.data.Data1 = output;
            val1 =  _this.globalOptions.data.Data1;
            secondCall(val1);
        });
      }
});