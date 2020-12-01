'use strict'
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i]
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
    }
    return t
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled (value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected (value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step (result) {
        result.done
          ? resolve(result.value)
          : new P(function (resolve) {
              resolve(result.value)
            }).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb (n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step (op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [0, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
exports.__esModule = true
var cosmos_1 = require('@azure/cosmos')
var Parameter = /** @class */ (function () {
  function Parameter (name, value) {
    this.name = name
    this.value = value
  }
  Parameter.prototype.valueOf = function () {
    return {
      name: this.name,
      value: this.value
    }
  }
  return Parameter
})()
exports.Parameter = Parameter
var Query = /** @class */ (function () {
  function Query (query) {
    var _this = this
    this.addParameter = function (_a) {
      var name = _a.name,
        value = _a.value
      _this.parameters.push(new Parameter(name, value))
      return _this
    }
    this.setQuery = function (query) {
      _this.query = query
      return _this
    }
    this.addToQuery = function (segment) {
      _this.query += segment
      return _this
    }
    this.addToQueryFromAttribute = function (params) {
      var entries = Object.entries(params)
      var max = 0
      entries.forEach(function (_a, i) {
        var name = _a[0],
          value = _a[1]
        var paramNumber = _this.quickParams + i
        _this.query += ' and c[@P' + paramNumber + '] = @V' + paramNumber
        _this.parameters.push(new Parameter('@P' + paramNumber, name))
        _this.parameters.push(new Parameter('@V' + paramNumber, value))
        max++
      })
      _this.quickParams += max
      return _this
    }
    this.query = query
    this.quickParams = 0
    this.parameters = []
    this.partitions = ''
    return this
  }
  Query.prototype.valueOf = function () {
    return {
      query: this.query,
      parameters: this.parameters.map(function (x) {
        return x.valueOf()
      })
    }
  }
  return Query
})()
exports.Query = Query
var Dao = /** @class */ (function () {
  function Dao (_a) {
    var secrets = _a.secrets,
      client = _a.client,
      databaseId = _a.databaseId,
      containerId = _a.containerId
    this._secrets = secrets
    this.client = client
    this.databaseId = databaseId
    this.collectionId = containerId
  }
  Dao.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var database, container
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.client) {
              this.client = new cosmos_1.CosmosClient(
                'AccountEndpoint=' +
                  this._secrets.endpoint +
                  ';AccountKey=' +
                  this._secrets.masterKey
              )
            }
            if (!!this.database) return [3 /*break*/, 2]
            return [
              4 /*yield*/,
              this.client.databases.createIfNotExists({
                id: this.databaseId
              })
            ]
          case 1:
            database = _a.sent().database
            this.database = database
            _a.label = 2
          case 2:
            if (!!this.container) return [3 /*break*/, 4]
            return [
              4 /*yield*/,
              this.database.containers.createIfNotExists({
                id: this.collectionId
              })
            ]
          case 3:
            container = _a.sent().container
            this.container = container
            _a.label = 4
          case 4:
            return [2 /*return*/]
        }
      })
    })
  }
  Dao.prototype.query = function (_a) {
    var query = _a.query,
      parameters = _a.parameters,
      partition = _a.partition
    return __awaiter(this, void 0, void 0, function () {
      var response, items
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _b.sent()
            if (!this.container) {
              throw new Error('Collection is not initialized.')
            }
            return [
              4 /*yield*/,
              this.container.items.query(
                {
                  query: query,
                  parameters: parameters
                },
                {
                  initialHeaders: {
                    'x-ms-documentdb-partitionkey': '["' + partition + '"]'
                  }
                }
              )
            ]
          case 2:
            response = _b.sent()
            return [4 /*yield*/, response.fetchAll()]
          case 3:
            items = _b.sent()
            // console.log()
            return [2 /*return*/, items.resources]
        }
      })
    })
  }
  /**
   * TODO - ADAM
   * Have this create multiple parameters that are filled out when they create an item
   *  * Create On
   *  * Create By
   *  * Location Data
   *  * Time Logs
   *  * Etc.
   *
   * @param {*} item
   */
  Dao.prototype.create = function (item) {
    return __awaiter(this, void 0, void 0, function () {
      var defaults
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _a.sent()
            defaults = {
              createdOn: Number.parseInt(String(Date.now() / 1000))
              // updatedOn: Number.parseInt(String(Date.now() / 1000))
            }
            // Sort Attributes Here
            return [
              2 /*return*/,
              this.container.items.create(__assign({}, item, defaults))
            ]
        }
      })
    })
  }
  Dao.prototype.update = function (record, partitionKey) {
    return __awaiter(this, void 0, void 0, function () {
      var item, oldRecord, response
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _a.sent()
            return [4 /*yield*/, this.get(record.id, partitionKey)]
          case 2:
            item = _a.sent()
            return [4 /*yield*/, item.read()]
          case 3:
            oldRecord = _a.sent()
            return [
              4 /*yield*/,
              item.replace(
                __assign({}, oldRecord.resource, record, {
                  updatedOn: Number.parseInt(String(Date.now() / 1000))
                })
              )
            ]
          case 4:
            response = _a.sent()
            return [2 /*return*/, response.resource]
        }
      })
    })
  }
  /**
   *
   * @param item
   */
  Dao.prototype['delete'] = function (item) {
    return __awaiter(this, void 0, void 0, function () {
      var record
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _a.sent()
            return [4 /*yield*/, this.get(item.id, item._partitionKey)]
          case 2:
            record = _a.sent()
            return [
              2 /*return*/,
              record.replace(__assign({}, record.read(), { ttl: 1 }))
            ]
        }
      })
    })
  }
  Dao.prototype.get = function (itemId, type) {
    return __awaiter(this, void 0, void 0, function () {
      var item
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _a.sent()
            item = this.container.item(itemId, type)
            return [2 /*return*/, item]
        }
      })
    })
  }
  Dao.prototype.getRecord = function (itemId, type) {
    return __awaiter(this, void 0, void 0, function () {
      var item
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.init()]
          case 1:
            _a.sent()
            item = this.container.item(itemId, type)
            return [2 /*return*/, item.read()]
        }
      })
    })
  }
  return Dao
})()
exports.Dao = Dao
