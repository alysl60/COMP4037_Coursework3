const generatedBibEntries  = {
    "SinghInfantCVAI2023": {
        "abstract": "The new era of technology is being greatly \n" +
            "influenced by the field of artificial intelligence. Computer vision \n" +
            "and deep learning have become increasingly important due to \n" +
            "their ability to process vast amounts of data and provide insights \n" +
            "and solutions in a variety of fields. Computer vision, deep learning \n" +
            "and signal analysis have been used in a growing number of \n" +
            "applications and services including smart devices, image, and \n" +
            "speech recognition, healthcare, etc., one such device is an infant \n" +
            "monitoring system. It monitors the daily activities of the infant \n" +
            "such as their sleeping patterns, sounds, and movements. In this \n" +
            "paper, deep learning and computer vision libraries were used to \n" +
            "develop algorithms to detect whether the infant was in any \n" +
            "uncomfortable situation such as sleeping on its back, face being \n" +
            "covered and whether the infant was awake. The smart infant \n" +
            "monitoring system detects the infant's unsafe resting situation in \n" +
            "real time and sent immediate alerts to the caretaker’s device. This \n" +
            "paper presents the design flow of a smart infant monitoring system \n" +
            "consisting of a night vision camera, a Jetson Nano, and a Wi-Fi \n" +
            "internet connection. The pose estimation and awake detection \n" +
            "algorithms were developed and tested successfully for different \n" +
            "infant resting/sleeping situations. The smart infant monitoring \n" +
            "system provides significant benefits for safety and an improved \n" +
            "understanding of infants’ sleep patterns and behavior. ",
        "author": "Singh, Gurpreet and Shekhar, Abhishek Raj and Yu, Xinrui and Saniie, Jafar",
        "doi": "10.1109/eIT57321.2023.10187295",
        "booktitle": "2023 IEEE International Conference on Electro Information Technology (eIT)",
        "keywords": "type:system,application:infant monitoring system, method:deep learning," + " task:face detection, task:pose detection, platform:jetson nano, field:computer vision",
        "number": "",
        "publisher": "IEEE",
        "references": "",
        "pages": "1–6",
        "series": "eIT",
        "title": "Smart Infant Monitoring System Using Computer Vision and AI",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10187295",
        "volume": "",
        "year": "2023"
    },
       "Shamsir2020InfantMonitor": {
    "abstract": "The paper presents development of a smart infant monitoring system using multiple non-invasive sensors to detect various physiological functions. The system can evaluate different physiological activities such as respiration, movement, noise, position, as well as ambient temperature, and humidity. By processing the acquired data from different sensor modules, the system can generate alarm signals for adverse situations such as the occurrence of apnea, seizure, or noisy and uncomfortable environmental conditions. The system will also be able to detect critical respiratory conditions by analyzing breathing data and saturated blood oxygen level (SpO2) using machine learning (ML) models such as neural networks. The proposed system allows the caregiver to monitor the condition of the patient from a remote location by implementing wireless communication with a remote computer or a cell phone.",
    "author": "Shamsir, Samira and Hassan, Omiya and Islam, Syed K.",
    "doi": "https://doi.org/10.1109/I2MTC43012.2020.9129295",
    "booktitle": "2020 IEEE International Instrumentation and Measurement Technology Conference (I2MTC)",
    "keywords": "type:system, application:infant monitoring, method:machine learning, task:apnea detection, task:seizure detection, task:pose detection, platform:SensorTile, evaluation:prototype demonstration",
    "pages": "1–6",
    "publisher": "IEEE",
    "references": "",
    "series": "I2MTC",
    "title": "Smart Infant-Monitoring System with Machine Learning Model to Detect Physiological Activities and Ambient Conditions",
    "type": "inproceedings",
    "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9129295",
    "volume": "",
    "year": "2020"
    },
    "Ninomiya2023InfraredPosture": {
      "abstract": "The sleeping posture is a crucial determinant of infant growth and development. This study presents a non-contact, infrared-camera-based method for automatically classifying infant sleeping postures into four categories: supine, prone, right lateral, and left lateral. It employs Vision Pose software for 2D skeleton detection of eight joint points, followed by a two-step classification using a linear SVM. Compared to sensor-based methods, this video-only approach is less intrusive and better suited for home or childcare environments. Experimental results with two infants show a classification accuracy of 92.3%, demonstrating feasibility for real-life application.",
      "author": "Ninomiya, Yuina and Okada, Shima and Manno, Masanobu and Sakaue, Yusuke and Makikawa, Masaaki and Watanabe, Tamami and Fukuda, Yuko",
      "booktitle": "Emerging Technologies in Healthcare and Medicine (AHFE 2023)",
      "keywords": "type:application, paradigm:skeleton_based, time:real_time, evaluation:accuracy_metric, application:infant_monitoring",
      "pages": "1--7",
      "publisher": "AHFE Open Access",
      "references": "",
      "series": "AHFE",
      "doi": "10.54941/ahfe1004352",
      "title": "Automatic Classification of Infant Sleeping Postures Using an Infrared Camera",
      "type": "inproceedings",
      "url": "https://doi.org/10.54941/ahfe1004352",
      "volume": "116",
      "year": "2023"
    },
    "Okuno2020RolloverDetection": {
       "abstract": "This paper compares two deep-learning-based posture estimation models, OpenPose and Cascaded Pyramid Network (CPN), for detecting infant sleep posture using monocular camera footage. The study evaluates detection accuracy in upward, leftward, and rightward postures and proposes a rollover detection system based on joint coordinate analysis. CPN significantly outperforms OpenPose, achieving up to 74.3% success rate in certain postures. The proposed method detects rollovers with high accuracy by analyzing frame-wise changes in shoulder and hip coordinates. This non-contact approach is suitable for home environments without requiring physical sensors.",
      "author": "Okuno, Ayaka and Ishikawa, Takaaki and Watanabe, Hiroshi",
      "booktitle": "2020 IEEE 9th Global Conference on Consumer Electronics (GCCE)",
      "keywords": "type:application, paradigm:pose_estimation, paradigm:deep_learning, evaluation:accuracy_comparison, application:infant_monitoring, time:real_time",
      "pages": "490--493",
      "publisher": "IEEE",
      "references": "Ninomiya2023InfraredPosture",
      "series": "GCCE",
      "title": "Rollover Detection of Infants Using Posture Estimation Model",
      "type": "inproceedings",
      "url": "https://doi.org/10.1109/GCCE50665.2020.9292052",
      "doi": "https://doi.org/10.1109/GCCE50665.2020.9292052",
      "volume": "",
      "year": "2020"
    },


    "Huang2025SuffocationDetection": {
      "abstract": "This study proposes a camera-based infant suffocation risk detection framework leveraging text-to-image generation to overcome the scarcity of real-world data. Using the Kolors diffusion model, 25,000 occlusion-specific images were generated via custom prompt engineering to train models using self- and semi-supervised learning. A clinical trial was conducted, capturing 14,060 real infant images under various occlusion scenarios. Models trained on generated data achieved over 90% in accuracy, recall, and F1-score, outperforming those trained via conventional fine-tuning or transfer learning. This work highlights how generative data and minimal supervision can achieve robust suffocation risk detection for sleep safety.",
      "author": "Huang, Dongmin and Liao, Chuchu and Mai, Jingyun and He, Xiaoxiao and Pan, Liping and Xia, Ming and Lai, Huailei and Yang, Xuhui and Lin, Zhenlang and Wang, Wenjin",
      "journal": "IEEE Journal of Biomedical and Health Informatics",
      "keywords": "type:application, paradigm:text_to_image, paradigm:diffusion_model, paradigm:semi_supervised_learning, evaluation:clinical_trial, application:infant_suffocation_detection, time:real_time",
      "pages": "1--13",
      "publisher": "IEEE",
      "references": "Huang2024SleepWakeCDRC",
      "series": "JBHI",
      "title": "Camera-based Infant Suffocation Risk Detection via Text-to-Image Generation for Guarding Sleep Safety",
      "type": "article",
      "url": "https://doi.org/10.1109/JBHI.2025.3542594",
      "doi": "https://doi.org/10.1109/JBHI.2025.3542594",
      "volume": "XX",
      "number": "XX",
      "year": "2025"
    },
    "Huang2024SleepWakeCDRC": {
      "abstract": "This paper presents a generalized infant sleep-wake monitoring framework validated through a large-scale, multi-center clinical trial across four NICUs. Using facial videos from 103 infants (64 term, 39 preterm), the authors benchmark hand-crafted models against end-to-end CNNs, concluding that face-based deep models yield highest performance. A novel regularization strategy, Consistent Deep Representation Constraint (CDRC), is introduced to address bias from inter-subject and inter-environment variance. CDRC significantly improves generalization across age and hospital settings, achieving over 94% accuracy and F1-score using Inception-V3, and enabling real-time deployment on edge devices such as Ingenic T40.",
      "author": "Huang, Dongmin and Yu, Dongfang and Zeng, Yongshen and Song, Xiaoyan and Pan, Liping and He, Junli and Ren, Lirong and Yang, Jie and Lu, Hongzhou and Wang, Wenjin",
      "journal": "IEEE Journal of Biomedical and Health Informatics",
      "keywords": "type:application, paradigm:cnn, paradigm:cdrc, evaluation:clinical_trial, application:sleep_wake_monitoring, time:real_time, paradigm:multi_center, paradigm:deep_learning",
      "pages": "3015--3028",
      "publisher": "IEEE",
      "references": "",
      "series": "JBHI",
      "title": "Generalized Camera-Based Infant Sleep-Wake Monitoring in NICUs: A Multi-Center Clinical Trial",
      "type": "article",
      "url": "https://doi.org/10.1109/JBHI.2024.3371687",
      "doi": "https://doi.org/10.1109/JBHI.2024.3371687",
      "volume": "28",
      "number": "5",
      "year": "2024"
    },
    "Bharati2021SIDSMonitor": {
      "abstract": "This paper proposes a custom lightweight CNN-based computer vision system to detect hazardous infant sleep positions associated with Sudden Infant Death Syndrome (SIDS). The model classifies baby sleep posture into three categories: safe (face-up), alert (turning), and alarm (face-down), and runs on edge devices such as Raspberry Pi for real-time alerts. The model was trained on 18,000 images, including synthetically augmented data. Experimental results show near 100% accuracy for face-up and face-down detection with latency under 3 seconds. The system supports caregiver feedback for continuous retraining and is designed to be non-intrusive, low-cost, and privacy-preserving.",
      "author": "Bharati, Vivek",
      "booktitle": "2021 IEEE International Conference on Smart Computing (SMARTCOMP)",
      "keywords": "type:application, paradigm:cnn, evaluation:edge_deployment, evaluation:latency_test, application:sids_prevention, time:real_time",
      "pages": "286--291",
      "publisher": "IEEE",
      "references": "",
      "series": "SMARTCOMP",
      "title": "An Efficient Edge Deep Learning Computer Vision System to Prevent Sudden Infant Death Syndrome",
      "type": "inproceedings",
      "url": "https://doi.org/10.1109/SMARTCOMP52413.2021.00061",
       "doi": "https://doi.org/10.1109/SMARTCOMP52413.2021.00061",
      "volume": "",
      "year": "2021"
    },
    "Deng2018NoncontactMonitoring": {
      "abstract": "This study proposes a noncontact, vision-based sleep monitoring system that simultaneously analyzes respiration, head posture, and body posture using infrared cameras and a Kinect motion sensor. The system leverages motion magnification and heuristic region selection to estimate breathing rhythms, tracks head orientation using a hybrid optical flow and template matching approach, and classifies 12 body postures using SVMs on Kinect skeleton data. Experimental results on a 20-hour simulated dataset from 7 adult subjects show 96% accuracy in breathing and movement recognition, 87.6% accuracy in head tracking, and over 90% in body posture classification.",
      "author": "Deng, Fei and Dong, Jianwu and Wang, Xiangyu and Fang, Ying and Liu, Yu and Yu, Zhaofei and Liu, Jing and Chen, Feng",
      "journal": "IEEE Transactions on Instrumentation and Measurement",
      "keywords": "type:application, paradigm:template_matching, paradigm:svm, paradigm:optical_flow, evaluation:simulation, application:sleep_monitoring, application:breathing_analysis, application:posture_estimation, time:real_time",
      "pages": "1555--1563",
      "publisher": "IEEE",
      "references": "",
      "series": "TIM",
      "title": "Design and Implementation of a Noncontact Sleep Monitoring System Using Infrared Cameras and Motion Sensor",
      "type": "article",
      "url": "https://doi.org/10.1109/TIM.2017.2779358",
      "doi": "https://doi.org/10.1109/TIM.2017.2779358",
      "volume": "67",
      "number": "7",
      "year": "2018"
    },
    "Li2023SleepPostureML": {
      "abstract": "This systematic review examines recent advances in sleep posture recognition using machine learning. Covering 27 studies from 2017 to 2022, it analyzes data acquisition methods, feature extraction, algorithm design, and validation strategies. The review categorizes existing methods by sensor modality: pressure arrays, physiological signals, infrared imaging, and wearables. It discusses preprocessing pipelines, CNN-based and traditional ML classifiers, and evaluation techniques like LOSO and k-fold validation. The paper highlights challenges such as dataset scarcity, privacy concerns, and generalization limits, and outlines future directions including transfer learning and Transformer-based models for improved accuracy and robustness.",
      "author": "Li, Xianglin and Gong, Yanfeng and Jin, Xiaoyun and Shang, Peng",
      "doi": "10.1016/j.pmcj.2023.101752",
      "journal": "Pervasive and Mobile Computing",
      "keywords": "type:survey, paradigm:machine_learning, application:sleep_posture, evaluation:cross_validation, time:2023",
      "number": "",
      "pages": "101752",
      "publisher": "Elsevier",
      "references": "",
      "series": "PMC",
      "title": "Sleep posture recognition based on machine learning: A systematic review",
      "type": "article",
      "volume": "90",
      "year": "2023",
      "url": "https://doi.org/10.1016/j.pmcj.2023.101752",
      "doi": "https://doi.org/10.1016/j.pmcj.2023.101752"
    },
   "Khan2021SmartInfant": {
      "abstract": "This paper presents a deep learning-based smart baby monitor that automatically detects harmful sleep-related situations such as face covered, blanket thrown off, frequent movement, and awakening using camera input. The system implements pose estimation, motion detection, and eye aspect ratio (EAR) tracking to identify these states. Algorithms are optimized to run on an embedded NVIDIA Jetson Nano platform with low latency, and alerts are delivered to a caregiver’s smartphone using Firebase Cloud Messaging (FCM). A smartphone app receives the notifications and streams real-time video from the device, allowing for remote monitoring even outside the home network. Experimental results show the system’s efficacy in both day and night conditions using realistic baby dolls and images.",
      "author": "Khan, Tareq",
      "doi": "https://doi.org/10.3390/ai2020018",
      "journal": "AI",
      "publisher": "MDPI",
      "year": "2021",
      "volume": "2",
      "number": "2",
      "pages": "290–306",
      "title": "An Intelligent Baby Monitor with Automatic Sleeping Posture Detection and Notification",
      "type": "article",
      "keywords": "type:system, application:infant monitoring, method:deep learning, task:posture detection, task:awake detection, task:blanket detection, platform:Jetson Nano, evaluation:prototype",
      "url": "https://www.mdpi.com/2673-2688/2/2/18",
      "doi": "https://www.mdpi.com/2673-2688/2/2/18"
    }


};















































































