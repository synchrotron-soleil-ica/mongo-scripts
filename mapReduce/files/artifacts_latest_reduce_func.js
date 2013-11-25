var reduce_latestversion_function = function (key, values) {

    var maxVersionDoc;
    var curMaxVersionVal = "";
    var BreakException = {};
    try {
        values.forEach(
            function (curObj) {

                //-- Get current version from values element
                var curVersionVal = curObj.version;

                //-- Case of isForce version
                if (curObj.isForce) {
                    maxVersionDoc = curObj;
                    throw BreakException;
                }

                if (version_compare(curVersionVal, curMaxVersionVal, ">")) {
                    curMaxVersionVal = curVersionVal;
                    maxVersionDoc = curObj;
                }
            }
        );

        return  maxVersionDoc;

    } catch (e) {
        if (e === BreakException) {
            return maxVersionDoc;
        }

        throw e;
    }
}
