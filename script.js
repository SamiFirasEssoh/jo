const provincesData = {
    Amman: {
        population: "4,500,000",
        area: "1,680 كم²",
        strategicLocation: "العاصمة الأردنية عمّان تتميز بموقعها الاستراتيجي الذي يجعلها واحدة من أهم المراكز الحضارية والتجارية في المنطقة.",
        famousPerson: "الملك عبد الله الثاني بن الحسين",
        economicActivity: "يمثل النشاط الاقتصادي في عمّان مزيجًا من التجارة، الصناعة، الخدمات، وريادة الأعمال، مما يجعلها محركًا أساسيًا للنمو الاقتصادي في الأردن.",
        spokenLanguages: "العربية، الإنجليزية",
        historicalSignificance: "",
        touristPlaces: [
            { name: "جبل القلعة", description: "أحد أشهر المعالم التاريخية في عمان." },
            { name: "متحف الأردن", description: "متحف يعرض تاريخ الأردن والحضارات القديمة." }
        ]
    },
    Zarqa: {
        population: "1,000,000",
        area: "4,600 كم²",
        strategicLocation: "موقع الزرقاء الاستراتيجي يجعلها مركزًا صناعيًا وتجاريًا حيويًا في الأردن. كما يربطها بالبقية من المناطق الأردنية وبالدول المجاورة، مما يعزز دورها في الاقتصاد الأردني بشكل عام.",
        famousPerson: "الشيخ مشهور حسن آل سلمان",
        economicActivity: "النشاط الاقتصادي في الزرقاء يتمحور حول الصناعة والتجارة، مع وجود قطاع زراعي وخدماتي مكمل. كونها العاصمة الصناعية للأردن، تساهم الزرقاء بشكل كبير في الاقتصاد الوطني، وتواصل تعزيز مكانتها كمركز صناعي وتجاري رئيسي.",
        spokenLanguages: "العربية",
        historicalSignificance: "تاريخ الزرقاء يمتد عبر العصور المختلفة، من العصور القديمة وحتى العصر الحديث. تمثل المدينة نقطة حيوية في تاريخ الأردن، حيث شهدت تطورًا كبيرًا عبر العصور المتعددة، مما جعلها مركزًا استراتيجيًا وثقافيًا عبر التاريخ.",
        touristPlaces: [
            { name: "قصر الملك عبدالله الثاني", description: "قصر تاريخي يقع في الزرقاء." },
            { name: "  جبل الشومري", description: "يُعتبر جبل الشومري من المناطق الطبيعية التي تتمتع بمشاهد بانورامية، حيث يُمكن للزوار التمتع بإطلالات رائعة على المنطقة المحيطة." }
        ]
    },
    Irbid: {
        population: "1,200,000",
        area: "1,100 كم²",
        strategicLocation: "تتمتع إربد بموقع استراتيجي يجمع بين القيمة التجارية و الجغرافية بفضل قربها من الحدود السورية وموقعها على الطريق السريع الرابط بين عمان ودمشق. إضافة إلى كونها مدينة تاريخية ذات أهمية ثقافية وزراعية، مما يجعلها أحد المراكز الحيوية في شمال الأردن.",
        famousPerson: "علي بن الحسين",
        economicActivity: "النشاط الاقتصادي في إربد يتميز بتنوعه بين الزراعة والصناعة و التجارة و الخدمات. الزراعة تعد من المحركات الرئيسية للاقتصاد المحلي، تليها الصناعات الغذائية والصناعات التحويلية. إضافة إلى القطاعات الخدمية مثل التعليم و السياحة، مما يجعل إربد مدينة اقتصادية متكاملة في شمال الأردن.",
        spokenLanguages: "العربية",
        historicalSignificance: "تتمتع إربد بتاريخ طويل يعكس التنوع الثقافي والحضاري في المنطقة. من العصور القديمة، مرورًا بالعهد الروماني والإسلامي والعثماني، وصولًا إلى العصر الحديث، لعبت إربد دورًا محوريًا في التاريخ الأردني والعربي. تعتبر المدينة أحد المحاور الرئيسية التي تتلاقى فيها مختلف الحضارات التي مرت على المنطقة، ما يعزز من قيمتها التاريخية والثقافية.",
        touristPlaces: [
            { name: "موقع أم قيس", description: "موقع أثري يطل على بحيرة طبريا." },
            { name: "متحف إربد", description: "متحف يعرض تاريخ المنطقة." }
        ]
    },
    Aqaba: {
        population: "150,000",
        area: "375 كم²",
        strategicLocation: "مدينة ساحلية على البحر الأحمر، وهي البوابة البحرية للأردن.",
        famousPerson: "صالح العرموطي",
        economicActivity: "السياحة، الصيد، والتجارة البحرية.",
        spokenLanguages: "العربية، الإنجليزية",
        historicalSignificance: "العقبة كانت بوابة تجارية قديمة.",
        touristPlaces: [
            { name: "شاطئ العقبة", description: "شاطئ ساحر يقع على البحر الأحمر." },
            { name: "قلعة العقبة", description: "قلعة تاريخية تطل على البحر." }
        ]
    },
    Maan: {
        population: "130,000",
        area: "32,000 كم²",
        strategicLocation: "مدينة معان هي البوابة الجنوبية للأردن وتتميز بمنطقة وادي رم.",
        famousPerson: "محمد بن عبد الله",
        economicActivity: "السياحة والأنشطة الزراعية.",
        spokenLanguages: "العربية",
        historicalSignificance: "معان كان لها دور بارز في تاريخ الأردن خاصة في فترة الثورة العربية الكبرى.",
        touristPlaces: [
            { name: "وادي رم", description: "منطقة صحراوية شهيرة تتميز بجمالها الطبيعي." },
            { name: "محمية ضانا", description: "محمية طبيعية تحوي تنوعًا بيئيًا كبيرًا." }
        ]
    },
    Mafraq: {
        population: "200,000",
        area: "26,000 كم²",
        strategicLocation: "مدينة المفرق تقع شمال شرق الأردن وتشكل نقطة وصل هامة مع العراق وسوريا.",
        famousPerson: "محمود أبو عواد",
        economicActivity: "الزراعة والتجارة الحدودية.",
        spokenLanguages: "العربية",
        historicalSignificance: "المفرق كانت نقطة وصل تجارية منذ العصور القديمة.",
        touristPlaces: [
            { name: "موقع أروقة", description: "موقع أثري مهم يعود للعصر الروماني." }
        ]
    },
    Karak: {
        population: "160,000",
        area: "3,000 كم²",
        strategicLocation: "تقع في جنوب الأردن وتعتبر مركزًا تاريخيًا.",
        famousPerson: "يوسف الخطيب",
        economicActivity: "الزراعة، السياحة.",
        spokenLanguages: "العربية",
        historicalSignificance: "الكرك كانت مركزًا رئيسيًا في العصور الإسلامية.",
        touristPlaces: [
            { name: "قلعة الكرك", description: "قلعة مشهورة ذات تاريخ طويل." }
        ]
    },
    Tafila: {
        population: "100,000",
        area: "1,500 كم²",
        strategicLocation: "مدينة تقع في الجنوب الغربي للأردن وتعتبر معقلًا ثقافيًا.",
        famousPerson: "إبراهيم الحسن",
        economicActivity: "الزراعة وتربية الماشية.",
        spokenLanguages: "العربية",
        historicalSignificance: "الطفيلة معروفة بتاريخها الثقافي الغني.",
        touristPlaces: [
            { name: "مغارة الطفيلة", description: "مغارة طبيعية مذهلة." }
        ]
    },
    Ajloun: {
        population: "160,000",
        area: "400 كم²",
        strategicLocation: "مدينة تقع شمال الأردن وتعتبر من المناطق الجبلية الخلابة.",
        famousPerson: "محمد الطراونة",
        economicActivity: "الزراعة والسياحة.",
        spokenLanguages: "العربية",
        historicalSignificance: "عجلون كانت مركزًا مهمًا في العصر الأيوبي.",
        touristPlaces: [
            { name: "قلعة عجلون", description: "قلعة تاريخية تعود للعصر الأيوبي." }
        ]
    },
    Balqa: {
        population: "400,000",
        area: "2,000 كم²",
        strategicLocation: "مدينة البلقة هي نقطة وصل بين عمان والعقبة.",
        famousPerson: "نجيب عواد",
        economicActivity: "الزراعة والصناعة.",
        spokenLanguages: "العربية",
        historicalSignificance: "البلقة تاريخيًا كانت منطقة زراعية هامة.",
        touristPlaces: [
            { name: "بحيرة طبربور", description: "بحيرة طبيعية توفر مناظر رائعة." }
        ]
    },
    Madaba: {
        population: "70,000",
        area: "980 كم²",
        strategicLocation: "مدينة مدبّة تشتهر بأرضيتها الفسيفسائية التاريخية.",
        famousPerson: "أحمد الطراونة",
        economicActivity: "السياحة والصناعات الحرفية.",
        spokenLanguages: "العربية",
        historicalSignificance: "مدبّة هي موطن لأقدم خريطة فسيفسائية في العالم.",
        touristPlaces: [
            { name: "كنيسة القديس جورج", description: "كنيسة تاريخية تضم أقدم خريطة فسيفسائية." }
        ]
    },
    Jerash: {
        population: "200,000",
        area: "4,000 كم²",
        strategicLocation: "مدينة جرش تتمتع بموقع استراتيجي مميز في شمال الأردن، حيث تقع بين العاصمة عمان وإربد، مما يجعلها نقطة اتصال حيوية بين شمال المملكة ووسطها. تُحيط بها غابات الصنوبر والمساحات الزراعية الخصبة، مما يضفي على موقعها جمالية طبيعية ويجعلها وجهة سياحية بارزة.",
        famousPerson: "سامي الجندي",
        economicActivity: "السياحة والزراعة.",
        spokenLanguages: "العربية",
        historicalSignificance: "جرش ليست مجرد مدينة أثرية، بل هي شاهد على تعاقب الحضارات، بدءًا من العصر الروماني مرورًا بالعصور البيزنطية والإسلامية. هذا الإرث يجعلها واحدة من أهم الوجهات السياحية والثقافية في الأردن والمنطقة.",
        touristPlaces: [
            { name: "موقع جرش الأثري", description: "منطقة أثرية تضم آثارًا رومانية قديمة." }
        ]
    }
};

// تحميل تفاصيل الأماكن السياحية للمحافظة المختارة
function loadProvince(province) {
    const provinceDetails = document.getElementById('province-details');
    const data = provincesData[province];

    provinceDetails.innerHTML = `
        <h2>معلومات عن محافظة ${province}</h2>
        <div class="card">
            <h3>عدد السكان</h3>
            <p>${data.population}</p>
        </div>
        <div class="card">
            <h3>المساحة</h3>
            <p>${data.area}</p>
        </div>
        <div class="card">
            <h3>الموقع الاستراتيجي</h3>
            <p>${data.strategicLocation}</p>
        </div>
        <div class="card">
            <h3>شخصية بارزة</h3>
            <p>${data.famousPerson}</p>
        </div>
        <div class="card">
            <h3>النشاط الاقتصادي</h3>
            <p>${data.economicActivity}</p>
        </div>
        <div class="card">
            <h3>اللغات المحكية</h3>
            <p>${data.spokenLanguages}</p>
        </div>
        <div class="card">
            <h3>الأهمية التاريخية</h3>
            <p>${data.historicalSignificance}</p>
        </div>
        <h3>الأماكن السياحية:</h3>
    `;

    const placesContainer = document.createElement('div');
    data.touristPlaces.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.classList.add('card');
        placeElement.innerHTML = `<h3>${place.name}</h3><p>${place.description}</p>`;
        placesContainer.appendChild(placeElement);
    });

    provinceDetails.appendChild(placesContainer);
}
