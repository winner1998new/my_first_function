# Текущий писок задач
## JS классы
  1. Соз-м класс __СControlBlock__:
      - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
      - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
      - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
      - добавить св-во __financialBlock__, которое будет экземпляром класса __CFinancialBlock__
      - добавить св-во __scienceBlock__, которое будет экземпляром класса __CScienceBlock__
      - добавить св-во __cyberBlock__, которое будет экземпляром класса __CCyberBlock__
      - добавить св-во __director__
      - добавить св-во __securityReports__  - массив объектов:
            - __purpose__
            - __dateStart__
            - __vulnerabilities__
            - __dateEnd__
            - __employees__
            - __details__
      - добавить св-во __fabricPlan__
      - добавить св-во __fabricDirection__
      - добавить св-во __fabricInvestigations__ - массив объектов:
            - __purpose__
            - __dateStart__
            - __progress__
            - __budget__
            - __employees__
            - __profit__
      - добавить метод __#checkFinance__
      - добавить метод __getFullFabricInfo__
      - добавить метод __#checkEmployee__
      - добавить метод __#checkDetals__
      - добавить метод __#checkProduct__
      - добавить метод __#createPlanOfSecurityCheckReport__
      - добавить метод __checkFabricBlocks__ - будет запускать внутри методы: #checkProduct, #checkDetals, #checkEmployee, #checkFinance, #createPlanOfSecurityCheckReport
      1. Соз-м класс __CFinancialBlock__
          - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
          - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
          - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
          - добавить св-во __budget__
          - добавить св-во __financialReports__
          - добавить св-во __moneyInBank__
          - добавить св-во __debtClients__
          - добавить св-во __dedtFabric__
          - добавить метод __preCalculationOfPrice__
          - добавить метод __calculationOfFinancialYear__
          - добавить метод __checkBudget__
          - добавить метод __createFinancialReport__
      2. Соз-м класс __CScienceBlock__
          - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
          - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
          - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
          - добавить св-во __investigations__ - массив объектов:
              - __purpose__
              - __dateStart__
              - _ progress__
              - __budget__
              - __employees__
              - __profit__
          - добавить метод __createInvestigation__
          - добавить метод __updateInvestigation__
          - добавить метод __removeInvestigation__
      3. Соз-м класс __CCyberBlock__
          - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
          - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
          - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
          - добавить св-во __cyberSecurityReports__ - массив объектов:
              - __purpose__
              - __dateStart__
              - __vulnerabilities__
              - __dateEnd__
              - __employees__
              - __details__
          - добавить метод __createCyberSecurityReports__
          - добавить метод __updateCyberSecurityReports__
          - добавить метод __removeCyberSecurityReports__
  2. Соз-м класс __CEmployee__
     - добавить св-во __name__
     - добавить св-во __profession__
     - добавить св-во __experience__
     - добавить св-во __sex__
     - добавить св-во __oklad__
     - добавить св-во __equipments__ - что является массивом экземпляров класса __CEquipment__
     - добавить св-во __age__
     - добавить св-во __isWorkingNow__
     - добавить метод __checkYourEquipment__
     - добавить метод __changeSmenaStatus__
  3. Соз-м класс __CEquipment__
      - добавить св-во __status__
      - добавить св-во __material__
      - добавить св-во __dateBought__
      - добавить св-во __serviceLife__
      - добавить св-во __vendor__
      - добавить св-во __instruction__
      - добавить св-во __hasGuarantee__
      - добавить св-во __price__
  4. Соз-м класс __CInstallation__, который наследуется __CEquipment__
      - добавить метод __useEquipment__
  5. Соз-м класс __CNodes__
      - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
      - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
      - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
      - соз-ть метод __createLada__, который будет отдавать экземпляр класса __CLadaType__
      - соз-ть метод __createGaz__, который будет отдавать экземпляр класса __CGAZType__
      - соз-ть метод __createKamaz__, который будет отдавать экземпляр класса __CKamazType__
      - соз-ть метод __createZaz__, который будет отдавать экземпляр класса __CZAZType__
      - соз-ть метод __createMaz__, который будет отдавать экземпляр класса __CMAZType__
      1. создаем класс __СSample__
          - добавить св-во __concept__
          - добавить св-во __functionality__
          - добавить св-во __height__
          - добавить св-во __width__
      2. создаем класс __СModel__, который наследуется от класса __СSample__
          - добавить св-во __material__
          - добавить св-во __amountOfDoors__
      3. создаем класс __СBody__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __dateOfCreation__
          - добавить св-во __details__
          - добавить св-во __lifespan__
          - добавить св-во __placeForDoors__
          - добавить св-во __capacity__
          - добавить св-во __weightLimit__
      4. создаем класс __СFrame__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __lifespan__
          - добавить св-во __dateOfCreation__
          - добавить св-во __details__
      5. создаем класс __СChassis__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __lifespan__
          - добавить св-во __dateOfCreation__
          - добавить св-во __details__
          - добавить св-во __rotationAngle__
          - добавить св-во __amountWheel__
      6. создаем класс __СEngine__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __brand__
          - добавить св-во __name__
          - добавить св-во __lifespan__
          - добавить св-во __power__
          - добавить св-во __consumption__
          - добавить св-во __efficiency__
          - добавить св-во __guarantee__
      7. создаем класс __СElectrics__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __brand__
          - добавить св-во __hasDynamic__
          - добавить св-во __hasNavigation__
          - добавить св-во __hasAutopilot__
          - добавить св-во __hasCamera__
          - добавить св-во __lifespan__
          - добавить св-во __hasSignalling__
      8. создаем класс __СComfort__
          - добавить св-во __timeOfCreation__
          - добавить св-во __serial__
          - добавить св-во __lifespan__
          - добавить св-во __vehicleEquipment__
          - добавить св-во __hasAirConditioner__
          - добавить св-во __hasMusicDevice__
          - добавить св-во __seat__ - объект со св-ми:
              - __amount__
              - __material__
              - __coating__
              - __color__
      9. создаем класс __СComponents__ который наследуется от класса __СModel__
          - добавить св-во __body__, которое будет экземпляром класса __СBody__
          - добавить св-во __frame__, которое будет экземпляром класса __СFrame__
          - добавить св-во __chassis__, которое будет экземпляром класса __СChassis__
          - добавить св-во __engine__, которое будет экземпляром класса __СEngine__
          - добавить св-во __electrics__, которое будет экземпляром класса __СElectrics__
          - добавить св-во __comfort__, которое будет экземпляром класса __СComfort__
          - добавить св-во __price__
          - добавить метод __showCarParams__
          - добавить метод __showCarStatus__
      10. создаем класс __СAssembly__
          - добавить св-во __isDoorOpened__
          - добавить св-во __music__ - обеъкт со св-ми :
              - __isPlaying__
              - __sound__
              - __list__
          - добавить св-во __radio__ - обеъкт со св-ми :
              - __isPlaying__
              - __sound__
              - __list__
          - добавить св-во __isDoorLocked__
          - добавить св-во __isGabageLocked__
          - добавить св-во __isSignaling__
          - добавить св-во __lightStatus__ - массив состаяния
          - добавить св-во __windows__ - массив состаяния
          - добавить св-во __direction__
          - добавить метод __run__
          - добавить метод __stop__
          - добавить метод __interactDoor__
          - добавить метод __interactMusic__
          - добавить метод __interactLocks__
          - добавить метод __interactSignaling__
          - добавить метод __interactLighting__
          - добавить метод __interactWindows__
          - добавить метод __interactRadio__
          - добавить метод __interactSound__
          - добавить метод __showCarParams__ - внутри вызывает метод __showCarParams__ из класса __СComponents__
          - добавить метод __showCarStatus__ - внутри вызывает метод __showCarStatus__ из класса __СComponents__
      11. Классы разных типов машин на выходе
          - соз-м класс __CLadaType__ наследуется от класса __СAssembly__
          - соз-м класс __CGAZType__ наследуется от класса __СAssembly__
          - соз-м класс __CKamazType__ наследуется от класса __СAssembly__
          - соз-м класс __CZAZType__ наследуется от класса __СAssembly__
          - соз-м класс __CMAZType__ наследуется от класса __СAssembly__
      12. Соз-м класс __СStandartAutoComplectation__ - добавить все поля, которые будут учитываться во всех классах
  6. Соз-м класс __CInstrumentalNode__
      - добавить св-во __employees__, которое будет массивом экземпляров класса __CEmployee__
      - добавить св-во __equipments__, которое будет массивом экземпляров класса __CEquipment__
      - добавить св-во __installations__, которое будет массивом экземпляров класса __CInstallation__
      - добавить метод __checkEquipment__
      - добавить метод __checkInstallation__
      - добавить метод __checkDetails__
      - добавить метод __checkNodes__
      - добавить метод __buy__
      - добавить метод __repair__
      - добавить метод __createReport__
  7. Соз-м класс __CFabric__
      - Добавить св-во __сontrolBlock__, которое будет экземпляром класса __СControlBlock__
      - Добавить св-во __тodes__, которое будет экземпляром класса __CNodes__
      - Добавить св-во __instrumentalNode__, которое будет экземпляром класса __CInstrumentalNode__
      - добавить св-во __nane__
      - добавить св-во __geo__
      - соз-ть метод c __reateCar__, который будет вызывать из __CNode__s нужный метод

## Интерфейс - Перевести логику ZOO в новосозданую структуру с визуальным отображением по макету
  1. Создать отдельную папку, в которой будет следующая структура: 
      - __src/index.js__ - содержит весь код задания про Зоопарк, включая запуск;
      - __index.html__   - упрощенное визуальное представление системы и экземпляра;
      - __style/style.css__ - стиль к вашему визуальному представлению;
      - __assets/image__ - папка с картинками;
      - __assets/font__  - папка со шрифтами;
      - __docs/README.md__ - главное и общее описание проекта, основные правила и особенности, а также доп. информация, такая как: тек. версия, партнеры, ссылки на документации и прочее;
      - __docs/structure.md__ - общая структура и архитектура проекта;
      - __docs/rules.md__ - правила для создания, использования и удаления проекта, а также пароли, ссылки и инструкции;
      - __docs/tasks.md__ - список поставленных задач (с датами и состоянием выполнения);
      - __docs/versions.md__ - список версий пректа и обновлений, касаемых их;
  2. Перенести основную логику в папку главного скрипта __src/index.js__.
  3. Создать базовую структуру в __html__ и __css__.
  4. Описать каркас приложения в __html__.
  5. Дополнить __js__-код относительно задачи.
      - Внести изменения в файл __structure.md__ относительно измененного кода.
  6. Выполнить поочередную стилизацию элементов.
      1. Стили __Header__
      2. Стили __Footer__
      3. Стили для блока с __id example-block-1__
      4. Стили __СControlBlock__
          - Стили __CFinancialBlock__
          - Стили __CScienceBlock__
          - Стили __CCyberBlock__
      5. Стили __CEmployee__
      6. Стили __CEquipment__
      7. Стили __CInstallation__
      8. Стили __CNodes__
          - Стили __СSample__
          - Стили __СModel__
          - Стили __СBody__
          - Стили __СFrame__
          - Стили __СChassis__
          - Стили __СEngine__
          - Стили __СElectrics__
          - Стили __СComfort__
          - Стили __СComponents__
          - Стили __CLadaType__
          - Стили __СAssembly__
          - Стили __CGAZType__
          - Стили __CKamazType__
          - Стили __CZAZType__
          - Стили __CMAZType__
      9. Стили __CInstrumentalNode__
      10. Стили __CFabric__
      11. Стили __формы__    
      12. Стили для блока с __id example-block-2__.
  7. Выполнить поочередную привязку __html__ и __js__.    
      - Действия в __Header__ на кнопки.
      - Действия в форме привязать к __js__.
      - Добавление новых блоков в __div__, где находится блок c __id example-block-1__.
  8.  Добавление анимаций (описываются позже).
  9. Проверка  
  10. Оптимизация


