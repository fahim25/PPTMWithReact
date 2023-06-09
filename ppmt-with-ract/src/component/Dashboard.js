import React, { Component } from "react";
import CreateProjectButton from "./project/CreateProjectButton";
import ProjectItem from "./project/ProjectItem";
import { connect } from "react-redux";
import { GetProjects } from "../actions/ProjectAction";
import PropTypes from "prop-types";

class Dashboard extends Component {
  /* Life Cycle Hooks */
  componentDidMount() {
    this.props.GetProjects();
  }

  render() {
    /* const projects = {
      projectName: "Project Name",
      projectDesc: "Project Desc",
      projectIdentifier: "Project Identifier",
    }; */

    const { projects } = this.props.project;

    return (
      <div>
        {/* <!-- Dashboard Component (Project Item included) --> */}

        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton />
                <br />
                <hr />

                {/* Project Item */}
                {/* <ProjectItem project={projects} /> */}
                {projects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End of Dashboard Component --> */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  GetProjects: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { GetProjects })(Dashboard);
