import BackgroundImage from "../../assets/imgs/backgroundTest.jpg";
import ProgressInfo from "./ProgressInfo";
import { DescriptionParagraph, ImageBackgroundProject, ProjectDescription, ProjectDescriptionWrapper, ProjectTitle, ProjectTitleBackground, SectionProject } from "./styles";

const ProjectInfo = () => {
    return (
        <SectionProject>
            <ImageBackgroundProject src={BackgroundImage} />
            <ProjectTitleBackground>
                <ProjectTitle>Project Title</ProjectTitle>
            </ProjectTitleBackground>
            <ProjectDescriptionWrapper>
                <div>
                    <ProjectDescription>Project Description</ProjectDescription>
                    <DescriptionParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.<br />
                        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
                    </DescriptionParagraph>
                </div>
                <ProgressInfo />
            </ProjectDescriptionWrapper>
        </SectionProject>
    )
}

export default ProjectInfo;