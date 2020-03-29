
  var API_URL = "https://5dbc736530411e0014f26e5f.mockapi.io/api/tasks";

  var get = function() {
    return fetch(API_URL).then(function(response) {
      switch (response.status) {
        case 200:
          return response.json();
      }
    });
  };

  var post = function(object) {
    return fetch(API_URL, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(object)
    }).then((response) => {
      switch (response.status) {
        case 201:
          return response.json();
      }
    });
  };

  var put = function(object, id) {
    return fetch(API_URL + `/${id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify(object)
    }).then(function(response) {
      switch (response.status) {
        case 200:
          return response.json();
      }
    });
  };

exports.HttpService = {
    get: get,
    post: post,
    put: put,
    API_URL
  };