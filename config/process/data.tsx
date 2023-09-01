type ProcessType = {
    stepNumber: string;
    title: string;
    description: string;
};

export const ProcessMock: ProcessType[] = [
    {
        stepNumber: "1",
        title: "Planujemy",
        description:
            "Kontaktuje się z Tobą i przeprowadzamy wywiad, aby dobrze poznać potrzeby oraz ustalić wymagania projektowe",
    },
    {
        stepNumber: "2",
        title: "Projektujemy",
        description: "Na podstawie rozmowy i zebranych wytycznych tworze projekt Twojej strony internetowej.",
    },
    {
        stepNumber: "3",
        title: "Programujemy",
        description:
            "Na podstawie grafik i treści programuje Twoją stronę, aby wyświetlała się dobrze na każdym urządzeniu oraz spełniała ustalone wymagania.",
    },
    {
        stepNumber: "4",
        title: "Testujemy",
        description:
            "Etap na którym upewniamy się, że Twoja strona WWW spełnia wysokie wymagania, które sobie wyznaczyliśmy, oraz wszystkie funkcjonalności działają tak jak zostało to ustalone.",
    },
    {
        stepNumber: "5",
        title: "Akceptacja projektu",
        description:
            "Jeszcze przed publikacją strony w sieci przekazuje Ci ostateczny projekt do wglądu i akceptacji, oraz zbieramy uwagi a następnie w razie potrzeby aktualizuje projekt.",
    },
    {
        stepNumber: "6",
        title: "Wdrażamy",
        description: "Publikuje Twoją witrynę w Internecie, pod wybraną przez Ciebie domeną.",
    },
];
