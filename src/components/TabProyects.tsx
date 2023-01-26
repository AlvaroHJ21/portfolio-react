import { useState } from 'react';
import { FlutterView } from '../views/FlutterView';
import { HTMLCSSJavascriptView } from '../views/HTMLCSSJavascriptView';
import { MERNView } from '../views/MERNView';
interface Tab {
    id: number;
    title: string;
    component: JSX.Element;
}

const tabs: Tab[] = [
    {
        id: 1,
        title: 'HTML, CSS, Javascript',
        component: <HTMLCSSJavascriptView/>,
    },
    {
        id: 2,
        title: 'MERN',
        component: <MERNView/>,
    },
    {
        id: 3,
        title: 'Movil Flutter',
        component: <FlutterView/>,
    },
];

export const TabProyects = () => {
    const [tabActive, setTabActive] = useState(tabs[0].id);
    const [view, setView] = useState(tabs[0].component);

    function handleClickTab(tab: Tab) {
        setTabActive(tab.id);
        setView(tab.component);
    }

    return (
        <section>
            {/* Tabs */}
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab ${tabActive === tab.id ? 'active' : ''}`}
                        onClick={() => handleClickTab(tab)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {view}
        </section>
    );
};
