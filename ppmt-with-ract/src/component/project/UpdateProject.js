import React, { Component } from "react";
import { GetProject, CreatePeoject } from "../../actions/ProjectAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";

class UpdateProject extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      projectDesc: "",
      startDate: "",
      endDate: "",
    };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      projectDesc,
      startDate,
      endDate,
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      projectDesc,
      startDate,
      endDate,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.GetProject(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDesc: this.state.projectDesc,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.CreatePeoject(updateProject, this.props.history);
  }
  

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    name="projectName"
                    placeholder="Project Name"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    disabled
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="projectDesc"
                    value={this.state.projectDesc}
                    onChange={this.onChange}
                  />
                </div>
                <h6 className="mt-3">Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </div>
                <h6 className="mt-3">Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  GetProject: PropTypes.func.isRequired,
  CreatePeoject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { GetProject, CreatePeoject })(
  UpdateProject
);