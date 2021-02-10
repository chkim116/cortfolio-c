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
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface SkillsType {
    name: string;
    iconHtml: JSX.Element;
}

export const skills = (size?: number): SkillsType[] => {
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

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    text-align: center;
    margin-top: 1em;
    padding: 0.5em;
`;

const SkillIcons = styled.div<{
    modal: boolean | undefined;
    selected: boolean;
}>`
    display: flex;
    align-items: center;
    padding: 0.3em;
    border-radius: 10px;
    ${({ modal }) =>
        modal &&
        css`
            justify-content: center;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        `}

    ${({ selected }) =>
        selected &&
        css`
            background-color: rgba(0, 0, 0, 0.1);
        `}

        span:nth-of-type(2) {
        font-size: ${({ theme }) => theme.ls};
        margin-left: 8px;
        margin-bottom: 6px;
    }
`;

const firstLetterUpper = (name: string): string => {
    const letter = name.split("");
    return `${letter[0].toUpperCase()}${letter.slice(1).join("")}`;
};

export const SkillList = ({
    userSkills,
    modal,
    onSeleted,
    selectName,
}: {
    userSkills: string[];
    modal?: boolean;
    onSeleted?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    selectName?: string[];
}) => {
    const showSkillList: SkillsType[] = skills(38).filter((skill) =>
        userSkills.includes(skill.name)
    );

    return (
        <Container>
            {showSkillList.map((skill) => (
                <SkillIcons
                    data-value={skill.name}
                    modal={modal && modal}
                    selected={selectName?.includes(skill.name) ? true : false}
                    onClick={onSeleted}
                >
                    <span>{skill.iconHtml}</span>
                    <span>{firstLetterUpper(skill.name)}</span>
                </SkillIcons>
            ))}
        </Container>
    );
};
