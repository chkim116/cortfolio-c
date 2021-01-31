import { FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import {
    SiNextDotJs,
    SiTypescript,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiGraphql,
    SiAmazonaws,
    SiFirebase,
    SiVueDotJs,
    SiAngularjs,
    SiJava,
    SiPython,
    SiSpring,
    SiWebpack,
    SiBabel,
    SiJquery,
} from "react-icons/si";
//  스킬리스트 예제

interface skills {
    name: string;
    iconHtml: JSX.Element;
}

const skills = (size: number): skills[] => {
    return [
        {
            name: "jquery",
            iconHtml: <SiJquery fill="#f1d900" size={size} />,
        },
        {
            name: "react",
            iconHtml: <FaReact fill="#60DAFB" size={size} />,
        },
        {
            name: "next",
            iconHtml: <SiNextDotJs fill="#000000" size={size} />,
        },
        {
            name: "node",
            iconHtml: <FaNodeJs fill="#73AB63" size={size} />,
        },
        {
            name: "css",
            iconHtml: <FaCss3 fill="#007ACC" size={size} />,
        },
        {
            name: "html",
            iconHtml: <FaHtml5 fill="#E44F26" size={size} />,
        },
        {
            name: "javascript",
            iconHtml: <SiJavascript fill="#FBE574" size={size} />,
        },
        {
            name: "typescript",
            iconHtml: <SiTypescript fill="#007ACC" size={size} />,
        },
        {
            name: "mongo",
            iconHtml: <SiMongodb fill="#259C3C" size={size} />,
        },
        {
            name: "sql",
            iconHtml: <SiMysql fill="#10728F" size={size} />,
        },
        {
            name: "graphql",
            iconHtml: <SiGraphql fill="#DE33A6" size={size} />,
        },
        {
            name: "aws",
            iconHtml: <SiAmazonaws fill="#FF9804" size={size} />,
        },
        {
            name: "firebase",
            iconHtml: <SiFirebase fill="#FFCC30" size={size} />,
        },
        {
            name: "vue",
            iconHtml: <SiVueDotJs fill="#3FB27F" size={size} />,
        },
        {
            name: "angular",
            iconHtml: <SiAngularjs fill="#BD002E" size={size} />,
        },
        {
            name: "java",
            iconHtml: <SiJava fill="#2671A1" size={size} />,
        },
        {
            name: "spring",
            iconHtml: <SiSpring fill="#73B61E" size={size} />,
        },
        {
            name: "python",
            iconHtml: <SiPython fill="#8FB0CD" size={size} />,
        },
        {
            name: "webpack",
            iconHtml: <SiWebpack fill="#8ACEF2" size={size} />,
        },
        {
            name: "babel",
            iconHtml: <SiBabel fill="#F4DB52" size={size} />,
        },
    ];
};

export const SkillList = ({ haveSkill }: { haveSkill: string[] }) => {
    const showSkillList: skills[] = skills(32).filter((skill) =>
        haveSkill.includes(skill.name)
    );

    return (
        <div>
            {showSkillList.map((skill) => (
                <div>
                    <span>{skill.name}</span>
                    <span>{skill.iconHtml}</span>
                </div>
            ))}

        </div>
    );
};
