import Project from '../models/Project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;

    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });

        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            "message": "Something goes wrong",
            "data": {}
        })
    }
}

export async function getOneProject(req,res){
    const { id } = req.params;
    const project = await Project.findOne({
        where: {
            id
        }
    });
    res.json(project);
}