
var fs = require('fs');
var treePath = {
    "controller": {
        "type": "folder",
        "child": {
            "admin_controller.js": {
                "type": "file"
            },
            "index_controller.js": {
                "type": "file"
            },
            "login_controller.js": {
                "type": "file"
            },
            "product_controller.js": {
                "type": "file"
            },
            "productApi_controller.js": {
                "type": "file"
            },
            "userApi_controller.js": {
                "type": "file"
            },
        }

    },
    "models": {
        "type": "folder",
        "child": {
            "product_models.js": {
                "type": "file"
            },
            "token_models.js": {
                "type": "file"
            },
            "user_models.js": {
                "type": "file"
            },
        }
    },
    "node_modules": {
        "type": "folder",
        "child": {
            "app.js": {
                "type": "file"
            },
            "db.js": {
                "type": "file"
            },
        }

    },
    "public": {
        "type": "folder",
        "child": {
            "app.js": {
                "type": "file"
            },
            "db.js": {
                "type": "file"
            },
        }

    },
    "uploads": {
        "type": "folder",
        "child": {
            "app.js": {
                "type": "file"
            },
            "db.js": {
                "type": "file"
            },
        }

    },
    "views": {
        "type": "folder",
        "child": {
            "categorys": {
                "type": "folder",
                "child": {
                    "aside.ejs": {
                        "type": "file"
                    },
                    "header.ejs": {
                        "type": "file"
                    },
                    "main.ejs": {
                        "type": "file"
                    },
                }
            },
            "partials": {
                "type": "folder"
            },
            "products": {
                "type": "folder"
            },
            "users": {
                "type": "folder"
            },
            "index.ejs": {
                "type": "file"
            },
        }

    },
    "app.js": {
        "type": "file"
    },
    "db.js": {
        "type": "file"
    },
    "package.json": {
        "type": "file"
    },
    "package-lock.json": {
        "type": "file"
    },
}
function createTree(treePath, parentFolder = './Project/') {
    for (var key in treePath) {
        if (treePath[key].type == "folder") {
            var dir = parentFolder + key;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        } else {
            fs.appendFile(parentFolder + key, "This is the append file " + key, function (err) {
                if (err) throw err;
            });
        }
        if (treePath[key].hasOwnProperty("child")) {
            createTree(treePath[key].child, parentFolder+key+'/')

        }
    }
}
var rootFolder = './Project/';
if (!fs.existsSync(rootFolder)) {
    fs.mkdirSync(rootFolder);
}
createTree(treePath, rootFolder);