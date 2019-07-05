import Project from '../models/Project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;

    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        });

        if (newProject) {
            res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}