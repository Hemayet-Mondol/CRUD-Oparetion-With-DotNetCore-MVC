// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

    // Get States by Country ID
    $('#CountryId').change(function () {
        $.ajax({
            type: "get",
            url: "/Employee/GetStatesByCountryId",
            data: { countryId: $('#CountryId').val() },
            datatype: "json",
            traditional: true,
            success: function (data) {
                var state = "<select id='StateId'>";
                state = state + '<option value="">Select State</option>';
                for (var i = 0; i < data.length; i++) {
                    state = state + '<option value=' + data[i].id + '>' + data[i].stateName + '</option>';
                }
                state = state + '</select>';
                $('#StateId').html(state);
            }
        });
    });

    // Get Cities by State ID
    $('#StateId').change(function () {
        $.ajax({
            type: "get",
            url: "/Employee/GetCitiesByStateId",
            data: { stateId: $('#StateId').val() },
            datatype: "json",
            traditional: true,
            success: function (data) {
                var city = "<select id='CityId'>";
                city = city + '<option value="">Select City</option>';
                for (var i = 0; i < data.length; i++) {
                    city = city + '<option value=' + data[i].id + '>' + data[i].cityName + '</option>';
                }
                city = city + '</select>';
                $('#CityId').html(city);
            }
        });
    });

    //Checkbox Checked
    var $ssc = $("#Ssc");
    var $hsc = $("#Hsc");
    var $bsc = $("#Bsc");
    var $msc = $("#Msc");

    $hsc.on("click", function () {
        var anyChecked = $hsc.is(":checked");
        $ssc.prop("checked", anyChecked);
    });
    $bsc.on("click", function () {
        var anyChecked = $bsc.is(":checked");
        $ssc.prop("checked", anyChecked);
        $hsc.prop("checked", anyChecked);
    });
    $msc.on("click", function () {
        var anyChecked = $msc.is(":checked");
        $ssc.prop("checked", anyChecked);
        $hsc.prop("checked", anyChecked);
        $bsc.prop("checked", anyChecked);
    });

    $ssc.on("click", function () {
        var anyChecked = $ssc.is(":unchecked");
        $hsc.prop("unchecked", anyChecked);
        $bsc.prop("unchecked", anyChecked);
        $msc.prop("unchecked", anyChecked);
    });


});

//Image Preview
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("FileUpload").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("UploadFile").src = oFREvent.target.result;
    };
};
