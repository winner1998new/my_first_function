class Employee {
  constructor(data) {
    this.name = data.name
    this.profession = data.profession
    this.experience = data.experience // опыт
    this.#checkPropData(data)
  } 
  #privateDataEmployee =['name', 'profession', 'experience']
  #checkPropData = data => {
    if (this.#privateDataEmployee.find(key => !data[key])) {
      throw new Error('НЕ ПОЛНЫЕ ДАННВЕ')
    }
  }
}

class Equipment { // оборудование
  constructor(sata) {

  }
}


class ScienceBlock { // научный блок и исследования

}

class Sample {
  constructor(sizes) {
    this.height = sizes.height || '1m'
    this.width = sizes.width || '0.5m'
  }
}
class Model extends Sample {
  constructor(params) {
    super(params)
    
  }
}

class СComponents {
  #price = 0
  #body = {}
  #frame = {}
  #chassis = {}
  #engine = {}
  #electrics = {}
  #comfort = {}
  constructor(data) {
    super(data.model)
    this.#body = new Body(data.body)
    this.#frame = new Frame(data.frame)
    this.#chassis = new Chassis(data.chassis)
    this.#engine = new Engine(data.engine)
    this.#electrics = new Electrics(data.electrics)
    this.#comfort = new Comfort(data.comfort)
    this.#preCalculationOfPrice(data)
  }
  #preCalculationOfPrice(data) {
    this.#price = Object
      .keys(data)
      .map(key => {
        if (data[key] && data[key].price) {
          return data[key].price
        }
      })
      .filter(el => typeof el === 'number')
      .reduce((cur, next) => cur + next)
  }
  showCarStatus() { console.log('car status') }
  showCarParams() { console.log('params') }
}
class Body {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Frame {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Chassis {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Engine {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
    this.name = data.name || 'ЗИД-4.5'
  }
}
class Electrics {
  constructor(data) {
    this.material = data.material
    this.additionalFunctionality = data.additionalFunctionality 
    this.lifespan = data.lifespan
  }
}
class Comfort {
  constructor(data) {
    this.material = data.material
    this.additionalElement = data.additionalElement 
    this.lifespan = data.lifespan
    this.isCondition = data.isCondition
  }
}

class Assembly extends Nodes {
  constructor(data) {
    super(data)
  }
}

class TypeLada extends Assembly {
  constructor(data) {
    data.model = {
      height: '2m',
      width: '1m',
      material: 'wood',
      amountOfDoors: 4
    }
    data.electrics.isCondition = false
    data.body.material = 'wood'
    data.body.lifespan = Infinity
    data.electrics.lifespan = '3 days'
    data.frame.lifespan = Infinity
    data.comfort.lifespan = '1 day'
    data.chassis.lifespan = '2 days'
    data.engine.lifespan = 'every month'
    data.body.price = 1
    data.electrics.price = 1
    data.frame.price = 1
    data.comfort.price = 1
    data.chassis.price = 1
    data.engine.price = 1
    super(data)
    this.brand = 'LADA'
  }
}
class TypeGAZ extends Assembly {
  constructor(data) {
    data.model = {
      height: '1.5m',
      width: '1m',
      material: 'St + ALL',
      amountOfDoors: 5
    }
    data.electrics.isCondition = false
    data.body.material = 'St + ALL'
    data.body.lifespan = Infinity
    data.electrics.lifespan = null
    data.frame.lifespan = Infinity
    data.comfort.lifespan = null
    data.chassis.lifespan = Infinity
    data.engine.lifespan = 'every 6 month'
    data.body.price = 2
    data.electrics.price = 1
    data.frame.price = 2
    data.comfort.price = 1
    data.chassis.price = 2
    data.engine.price = 1
    super(data)
    this.brand = 'GAZ'
  }
}
class TypeKamaz extends Assembly {
  constructor(data) {
    data.model = {
      height: '3m',
      width: '1.5m',
      material: 'ST',
      amountOfDoors: 2
    }
    data.electrics.isCondition = true
    data.body.material = 'ST'
    data.body.lifespan = Infinity
    data.electrics.lifespan = Infinity
    data.frame.lifespan = Infinity
    data.comfort.lifespan = 'every 6 month'
    data.chassis.lifespan = 'every 6 month'
    data.engine.lifespan = 'every 6 month'
    data.body.price = 3
    data.electrics.price = 1
    data.frame.price = 3
    data.comfort.price = 3
    data.chassis.price = 4
    data.engine.price = 5
    super(data)
    this.brand = 'Kamaz'
  }
}
class TypeZAZ extends Assembly {
  constructor(data) {
    data.model = {
      height: '2m',
      width: '1m',
      material: 'low wood',
      amountOfDoors: 4
    }
    data.electrics.isCondition = false
    data.body.material = 'low wood'
    data.body.lifespan = '1 day'
    data.electrics.lifespan = '1 day'
    data.frame.lifespan = '1 day'
    data.comfort.lifespan = '1 day'
    data.chassis.lifespan = '1 day'
    data.engine.lifespan = '1 day'
    data.body.price = 0
    data.electrics.price = 0
    data.frame.price = 0
    data.comfort.price = 0
    data.chassis.price = 1
    data.engine.price = 0
    super(data)
    this.brand = 'ZAZ'
  }
}
class TypeMAZ extends Assembly {
  constructor(data) {
    data.model = {
      height: '2.5m',
      width: '1m',
      material: 'ALL',
      amountOfDoors: 4
    }
    data.electrics.isCondition = true
    data.body.material = 'ALL'
    data.body.lifespan = Infinity
    data.electrics.lifespan = '2 months'
    data.frame.lifespan = Infinity
    data.comfort.lifespan = '2 months'
    data.chassis.lifespan = Infinity
    data.engine.lifespan = Infinity
    data.body.price = 9
    data.electrics.price = 4
    data.frame.price = 6
    data.comfort.price = 3
    data.chassis.price = 9
    data.engine.price = 9
    super(data)
    this.brand = 'MAZ'
  }
}

const standartAutoComplection = {
  model: {
    height: '2.5m',
    width: '1m',
    material: 'ALL',
    amountOfDoors: 4
  },
  body: {
    material: 'ALL',
    lifespan: '5 years',
    color: 'indigo'
  },
  frame: {
    material: 'ALL',
    lifespan: '5 years',
    color: 'indigo'
  },
  electrics: {
    material: 'ALL',
    lifespan: '5 years',
    additionalFunctionality: null
  },
  comfort: {
    material: 'ALL',
    lifespan: '5 years',
    additionalElement: null,
    isCondition: true
  },
  chassis: {
    material: 'ALL',
    lifespan: '5 years',
    color: 'indigo'
  },
  engine: {
    material: 'ALL',
    lifespan: '5 years',
    color: 'indigo',
    name: 'ЗИД-4.5'
  }
}

let myLada = new TypeLada(standartAutoComplection)
let myKamaz = new TypeKamaz(standartAutoComplection)
let myGAZ = new TypeGAZ(standartAutoComplection)
let myZAZ = new TypeZAZ(standartAutoComplection)
let myMaz = new TypeMAZ(standartAutoComplection)
