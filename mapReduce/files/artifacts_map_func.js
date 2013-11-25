var map_version_function = function () {
    var key = {
        org: this.org,
        name: this.name,
        type: this.type,
        status: this.status
    };
    var value = {
        version: this.version,
        isForce: this.isForce
    };
    emit(key, value);
}