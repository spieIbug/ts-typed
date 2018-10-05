abstract;
var TypedFactory = (function () {
    function TypedFactory() {
    }
    /**
     * Takes a data, and model. Returns a typed object
     * @param data: any
     * @param model: Type<T>
     * @returns {T | T[]}
     */
    TypedFactory.create = function (data, model) {
        if (data === undefined || data === null) {
            return data;
        }
        if (Array.isArray(data)) {
            var response = [];
            for (var i = 0; i < data.length; i++) {
                response.push(new model(data[i]));
            }
            return response;
        }
        return new model(data);
    };
    return TypedFactory;
})();
