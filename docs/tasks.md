# Текущий писок задач
## JS классы
  1. Соз-м класс СControlBlock:
      - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
      - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
      - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
      - добавить св-во, которое будет экземпляром класса CFinancialBlock
      - добавить св-во, которое будет экземпляром класса CScienceBlock
      - добавить св-во, которое будет экземпляром класса CCyberBlock
      - добавить св-во director
      - добавить св-во securityReports
      - добавить св-во fabricPlan
      - добавить св-во fabricDirection
      - добавить св-во fabricInvestigations
      - добавить метод checkFinance
      - добавить метод getFullFabricInfo
      - добавить метод checkEmployee
      - добавить метод checkDetals
      - добавить метод checkProduct
      - добавить метод createPlanOfSecurityCheckReport
      - добавить метод checkFabricBlocks 
      1. Соз-м класс CFinancialBlock
          - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
          - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
          - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
          - добавить св-во budget
          - добавить св-во financialReport
          - добавить св-во moneyInBank
          - добавить св-во debtClints
          - добавить св-во dedtFabric
          - добавить метод preCalculationOfPrice
          - добавить метод calculationOfFinancialYear
          - добавить метод checkBudget
          - добавить метод createFinancialReport
      2. Соз-м класс CScienceBlock
          - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
          - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
          - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
          - добавить св-во investigations - массив объектов:
              - purpose
              - dateStart
              - progress
              - budget
              - employees
              - profit
          - добавить метод createInvestigation
          - добавить метод updateInvestigation
          - добавить метод removeInvestigation
      3. Соз-м класс CCyberBlock
          - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
          - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
          - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
          - добавить св-во cyberSecurityReports - массив объектов:
              - purpose
              - dateStart
              - vulnerability
              - dateEnd
              - employees
              - details
          - добавить метод createCyberSecurityReports
          - добавить метод updateCyberSecurityReports
          - добавить метод removeCyberSecurityReports
  2. Соз-м класс CEmployee
     - добавить св-во name
     - добавить св-во profession
     - добавить св-во experience
     - добавить св-во sex
     - добавить св-во oklad
     - добавить св-во equipments - что является массивом экземпляров класса CEquipment
     - добавить св-во age
     - добавить св-во isWorkingNow
     - добавить метод checkYourEquipment
     - добавить метод changeSmenaStatus
  3. Соз-м класс CEquipment
      - добавить св-во status
      - добавить св-во material
      - добавить св-во dateBought
      - добавить св-во serviceLife
      - добавить св-во vendor
      - добавить св-во instruction
      - добавить св-во hasGuarantee
      - добавить св-во price
  4. Соз-м класс CInstallation, который наследуется CEquipment
      - добавить метод useEquipment
  5. Соз-м класс CNodes
      - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
      - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
      - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
      - соз-ть метод createLada, который будет отдавать экземпляр класса CLadaType
      - соз-ть метод createGaz, который будет отдавать экземпляр класса CGAZType
      - соз-ть метод createKamaz, который будет отдавать экземпляр класса CKamazType
      - соз-ть метод createZaz, который будет отдавать экземпляр класса CZAZType
      - соз-ть метод createMaz, который будет отдавать экземпляр класса CMAZType
      1. создаем класс СSample
          - добавить св-во concept
          - добавить св-во functionality
          - добавить св-во height
          - добавить св-во width
      2. создаем класс СModel, который наследуется от класса СSample
          - добавить св-во material
          - добавить св-во amountOfDoors
      3. создаем класс СBody
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во dateOfCreation
          - добавить св-во details
          - добавить св-во lifespan
          - добавить св-во placeForDoors
          - добавить св-во capacity
          - добавить св-во weightLimit
      4. создаем класс СFrame
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во lifespan
          - добавить св-во dateOfCreation
          - добавить св-во details
      5. создаем класс СChassis
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во lifespan
          - добавить св-во dateOfCreation
          - добавить св-во details
          - добавить св-во rotationAngle
          - добавить св-во amountWheel
      6. создаем класс СEngine
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во brand
          - добавить св-во name
          - добавить св-во lifespan
          - добавить св-во power
          - добавить св-во consumption
          - добавить св-во efficiency
          - добавить св-во guarantee
      7. создаем класс СElectrics
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во brand
          - добавить св-во hasDynamic
          - добавить св-во hasNavigation
          - добавить св-во hasAutopilot
          - добавить св-во hasCamera
          - добавить св-во lifespan
          - добавить св-во hasSignalling
      8. создаем класс СComfort
          - добавить св-во timeOfCreation
          - добавить св-во serial
          - добавить св-во lifespan
          - добавить св-во vehicleEquipment
          - добавить св-во hasAirConditioner
          - добавить св-во hasMusicDevice
          - добавить св-во seat - объект со св-ми:
              - amount
              - material
              - coating
              - color
      9. создаем класс СComponents который наследуется от класса СModel
          - добавить св-во body, которое будет экземпляром класса СBody
          - добавить св-во frame, которое будет экземпляром класса СFrame
          - добавить св-во chassis, которое будет экземпляром класса СChassis
          - добавить св-во engine, которое будет экземпляром класса СEngine
          - добавить св-во electrics, которое будет экземпляром класса СElectrics
          - добавить св-во __comfort__, которое будет экземпляром класса СComfort
          - добавить св-во price
          - добавить метод preCalculationOfPrice
          - добавить метод showCarParams
          - добавить метод showCarStatus
      10. создаем класс СAssembly
          - добавить св-во isDoorOpened
          - добавить св-во music - обеъкт со св-ми :
              - isPlaying
              - sound
              - list
          - добавить св-во radio - обеъкт со св-ми :
              - isPlaying
              - sound
              - list
          - добавить св-во isDoorLocked
          - добавить св-во isGabageLocked
          - добавить св-во isSignaling
          - добавить св-во lightStatus
          - добавить св-во windows - массив состаяния
          - добавить св-во direction
          - добавить метод run
          - добавить метод stop
          - добавить метод interactDoor
          - добавить метод interactMusic
          - добавить метод interactLocks
          - добавить метод interactSignaling
          - добавить метод interactLighting
          - добавить метод interactWindows
          - добавить метод interactRadio
          - добавить метод interactSound
          - добавить метод showCarParams - внутри вызывает метод showCarParams из класса СComponents
          - добавить метод showCarStatus - внутри вызывает метод showCarStatus из класса СComponents
      11. Классы разных типов машин на выходе
          - соз-м класс CLadaType наследуется от класса СAssembly
          - соз-м класс CGAZType наследуется от класса СAssembly
          - соз-м класс CKamazType наследуется от класса СAssembly
          - соз-м класс CZAZType наследуется от класса СAssembly
          - соз-м класс CMAZType наследуется от класса СAssembly
      12. Соз-м класс СStandartAutoComplectation - добавить все поля, которые будут учитываться во всех классах
  6. Соз-м класс CInstrumentalNode
      - добавить св-во employees, которое будет массивом экземпляров класса CEmployee
      - добавить св-во equipments, которое будет массивом экземпляров класса CEquipment
      - добавить св-во installations, которое будет массивом экземпляров класса CInstallation
      - добавить метод checkEquipment
      - добавить метод checkInstallation
      - добавить метод checkDetails
      - добавить метод checkNodes
      - добавить метод buy
      - добавить метод repair
      - добавить метод createReport
  7. Соз-м класс CFabric
      - Добавить св-во, которое будет экземпляром класса СControlBlock
      - Добавить св-во, которое будет экземпляром класса CNodes
      - Добавить св-во, которое будет экземпляром класса CInstrumentalNode
      - добавить св-во nane
      - добавить св-во geo

## Интерфейс - Перевести логику ZOO в новосозданую структуру с визуальным отображением по макету
  1. Создать отдельную папку, в которой будет следующая структура: 
      - __src/index.js__ - содержит весь код задания про Зоопарк, включая запуск;
      - index.html   - упрощенное визуальное представление системы и экземпляра;
      - style/style.css - стиль к вашему визуальному представлению;
      - assets/image - папка с картинками;
      - assets/font  - папка со шрифтами;
      - docs/README.md - главное и общее описание проекта, основные правила и особенности, а также доп. информация, такая как: тек. версия, партнеры, ссылки на документации и прочее;
      - docs/structure.md - общая структура и архитектура проекта;
      - docs/rules.md - правила для создания, использования и удаления проекта, а также пароли, ссылки и инструкции;
      - docs/tasks.md - список поставленных задач (с датами и состоянием выполнения);
      - docs/versions.md - список версий пректа и обновлений, касаемых их;
  2. Перенести основную логику в папку главного скрипта src/index.js.
  3. Создать базовую структуру в html и css.
  4. Описать каркас приложения в html.
  5. Дополнить js-код относительно задачи.
      - Внести изменения в файл structure.md относительно измененного кода.
  6. Выполнить поочередную стилизацию элементов.
      1. Стили Header
      2. Стили Footer
      3. Стили для блока с id example-block-1
      4. Стили СControlBlock
          - Стили CFinancialBlock
          - Стили CScienceBlock
          - Стили CCyberBlock
      5. Стили CEmployee
      6. Стили CEquipment
      7. Стили CInstallation
      8. Стили CNodes
          - Стили СSample
          - Стили СModel
          - Стили СBody
          - Стили СFrame
          - Стили СChassis
          - Стили СEngine
          - Стили СElectrics
          - Стили СComfort
          - Стили СComponents
          - Стили CLadaType
          - Стили СAssembly
          - Стили CGAZType
          - Стили CKamazType
          - Стили CZAZType
          - Стили CMAZType
      9. Стили CInstrumentalNode
      10. Стили CFabric
      11. Стили формы    
      12. Стили для блока с id example-block-2.
  7. Выполнить поочередную привязку html и js.    
      - Действия в Header на кнопки.
      - Действия в форме привязать к js.
      - Добавление новых блоков в div, где находится блок c id example-block-1.
  8.  Добавление анимаций (описываются позже).
  9. Проверка  
  10. Оптимизация

### 21.08.2024
  - [x] Сформировали tasks.md
  - [ ] Вынести проект в GitHub
  - [x] Заполнить versions.md
  - [x] Вынести и заполнить README.md
  
### 22.08.2024
  - [ ] Закончить tasks.md (выделить слова, СStandartAutoComplectation)
  - [ ] Закончить structure.md 
  - [ ] Пересмотреть html структуру
  - [ ] Изменить пример 1
  - [ ] Стили header (Интерфейс, 6.1)
  - [ ] Стили footer (Интерфейс, 6.2)
  - [ ] Стили пример 1 (Интерфейс, 6.3)
  - [ ] Js СControlBlock (JS, 1, 1.1, 1.2, 1.3)
