var reduce_deprecatedversion_function = function (key, values) {

    var maxVersionDoc = reduce_latestversion_function(key, values);
    var maxVersionVal = maxVersionDoc.version

    var versionTab = [];
    values.forEach(
        function (value) {
            var curVersionVal = value.version;
            if (version_compare(curVersionVal, maxVersionVal, "<")) {
                versionTab.push(curVersionVal);
            }
        }
    );
    return {
        version: versionTab.join(" ")
    };
}
